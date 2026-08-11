import * as THREE from "three";

export class ParticleField {
  public points: THREE.Points;
  private geometry: THREE.BufferGeometry;
  private material: THREE.PointsMaterial;
  private positions: Float32Array;
  private velocities: Float32Array;
  private count: number;

  constructor(isMobile: boolean = false) {
    // 950 rich atmospheric data particles on desktop, 400 on mobile
    this.count = isMobile ? 400 : 950;
    this.geometry = new THREE.BufferGeometry();

    this.positions = new Float32Array(this.count * 3);
    this.velocities = new Float32Array(this.count);
    const colors = new Float32Array(this.count * 3);

    const palette = [
      new THREE.Color(0x3b82f6), // Electric Blue
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0x8b5cf6), // Purple
      new THREE.Color(0x60a5fa), // Light Blue
    ];

    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;
      // Fixed viewport height bounds (-14 to +14)
      const x = (Math.random() - 0.5) * 26;
      const y = (Math.random() - 0.5) * 28;
      const z = (Math.random() - 0.5) * 16 - 2;

      this.positions[i3] = x;
      this.positions[i3 + 1] = y;
      this.positions[i3 + 2] = z;

      this.velocities[i] = 0.004 + Math.random() * 0.012;

      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    this.geometry.setAttribute("position", new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle sprite texture
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      grad.addColorStop(0.35, "rgba(255, 255, 255, 0.6)");
      grad.addColorStop(0.7, "rgba(255, 255, 255, 0.2)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);

    this.material = new THREE.PointsMaterial({
      size: isMobile ? 0.06 : 0.085,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.points = new THREE.Points(this.geometry, this.material);
  }

  public update(time: number, scrollProgress: number = 0, reducedMotion: boolean = false) {
    if (reducedMotion) return;

    // Maintain rich 0.45 particle opacity across content, fade smoothly only near bottom of footer (scrollProgress > 0.95)
    if (scrollProgress > 0.95) {
      this.material.opacity = THREE.MathUtils.lerp(0.45, 0.2, (scrollProgress - 0.95) / 0.05);
    } else {
      this.material.opacity = 0.45;
    }

    const posAttr = this.geometry.attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;

    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;

      // Upward data stream drift
      array[i3 + 1] += this.velocities[i];
      array[i3] += Math.sin(time * 0.3 + i) * 0.0006;

      // Wrap-around viewport bounds
      if (array[i3 + 1] > 14) {
        array[i3 + 1] = -14;
      }
    }

    posAttr.needsUpdate = true;
  }

  public dispose() {
    this.geometry.dispose();
    this.material.dispose();
    if (this.material.map) this.material.map.dispose();
  }
}
