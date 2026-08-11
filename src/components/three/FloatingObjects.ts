import * as THREE from "three";

interface TechComponentNode {
  mesh: THREE.Mesh;
  initialPos: THREE.Vector3;
  rotSpeed: THREE.Vector3;
  floatOffset: number;
}

export class FloatingObjects {
  public group: THREE.Group;
  private nodes: TechComponentNode[] = [];
  private isMobile: boolean;

  constructor(isMobile: boolean = false) {
    this.isMobile = isMobile;
    this.group = new THREE.Group();

    // Unrelated floating objects removed so Delta Wave is the sole 3D visual hero
    const count = 0;

    // Abstract software architecture components (data block, microservice container, cloud node)
    const geometries = [
      new THREE.BoxGeometry(0.45, 0.45, 0.45), // Microservice Container Block
      new THREE.OctahedronGeometry(0.3, 0), // Data Node
      new THREE.BoxGeometry(0.6, 0.12, 0.35), // API Blade Block
    ];

    const materials = [
      new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        metalness: 0.85,
        roughness: 0.15,
        emissive: 0x2563eb,
        emissiveIntensity: 0.3,
        wireframe: true,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        metalness: 0.7,
        roughness: 0.2,
        transparent: true,
        opacity: 0.6,
        wireframe: false,
      }),
    ];

    for (let i = 0; i < count; i++) {
      const geom = geometries[i % geometries.length];
      const mat = materials[i % materials.length];

      const mesh = new THREE.Mesh(geom, mat);

      // Position on outer sides away from main text
      const side = i % 2 === 0 ? 1 : -1;
      const x = side * (4.2 + Math.random() * 3.5);
      const y = (Math.random() - 0.5) * 9;
      const z = (Math.random() - 0.5) * 5 - 2;

      mesh.position.set(x, y, z);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

      const rotSpeed = new THREE.Vector3(
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.1
      );

      this.nodes.push({
        mesh,
        initialPos: new THREE.Vector3(x, y, z),
        rotSpeed,
        floatOffset: Math.random() * Math.PI * 2,
      });

      this.group.add(mesh);
    }
  }

  public update(time: number, scrollProgress: number = 0, reducedMotion: boolean = false) {
    if (reducedMotion) return;

    for (const node of this.nodes) {
      node.mesh.rotation.x += node.rotSpeed.x * 0.01;
      node.mesh.rotation.y += node.rotSpeed.y * 0.01;
      node.mesh.rotation.z += node.rotSpeed.z * 0.01;

      // Gentle floating elevation
      node.mesh.position.y =
        node.initialPos.y + Math.sin(time * 0.6 + node.floatOffset) * 0.18 - scrollProgress * 3;
    }
  }

  public dispose() {
    for (const node of this.nodes) {
      node.mesh.geometry.dispose();
    }
  }
}
