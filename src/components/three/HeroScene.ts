import * as THREE from "three";

interface WaveNode {
  u: number; // Parameter along wave length [0, 1]
  v: number; // Parameter across ribbon width [-1, 1]
  basePos: THREE.Vector3;
  pos: THREE.Vector3;
  phase: number;
}

interface AINode {
  pos: THREE.Vector3;
  basePos: THREE.Vector3;
  phase: number;
}

interface AIConnection {
  fromIdx: number;
  toIdx: number;
}

interface DataPulse {
  u: number;
  vIdx: number;
  speed: number;
  isBrightPulse: boolean;
}

interface AIPulse {
  from: THREE.Vector3;
  to: THREE.Vector3;
  progress: number;
  speed: number;
}

export interface SectionParams {
  waveX: number;
  waveY: number;
  waveZ: number;
  scale: number;
  waveOpacity: number;
  lineOpacity: number;
  aiOpacity: number;
  aiLineOpacity: number;
  speed: number;
  gridStructureFactor: number;
}

export class HeroScene {
  public group: THREE.Group;
  private mainWaveGroup: THREE.Group;
  private aiNetworkGroup: THREE.Group;

  // Main Wave Ribbon Meshes
  private mainPointsMesh: THREE.Points;
  private mainLinesMesh: THREE.LineSegments;

  // Secondary Background Wave Trace Meshes
  private bgLinesMesh: THREE.LineSegments;

  // Left AI Computational Network Meshes
  private aiPointsMesh: THREE.Points;
  private aiLinesMesh: THREE.LineSegments;
  private aiPulsesMesh: THREE.Points;

  // Transition Streams (Left AI -> Right DeltaWave)
  private transitionLinesMesh: THREE.LineSegments;
  private transitionPulsesMesh: THREE.Points;

  // Data Flow Pulses Mesh
  private pulsesMesh: THREE.Points;

  private lightsGroup: THREE.Group;

  // Grid Dimensions (u x v)
  private uSamples: number;
  private vSamples: number;

  private mainNodes: WaveNode[] = [];
  private bgNodes: WaveNode[] = [];
  private aiNodes: AINode[] = [];
  private aiConnections: AIConnection[] = [];

  private pulses: DataPulse[] = [];
  private aiPulses: AIPulse[] = [];
  private transitionPulses: AIPulse[] = [];

  private mainPositions: Float32Array;
  private mainColors: Float32Array;
  private mainLinePositions: Float32Array;
  private mainLineColors: Float32Array;

  private bgLinePositions: Float32Array;
  private bgLineColors: Float32Array;

  private pulsePositions: Float32Array;
  private pulseColors: Float32Array;

  // AI Mesh Arrays
  private aiPositions: Float32Array;
  private aiColors: Float32Array;
  private aiLinePositions: Float32Array;
  private aiLineColors: Float32Array;

  private isMobile: boolean;
  private mouseWorld = { x: 0, y: 0 };
  private currentSpeed = 0.28;
  private gridStructureFactor = 0.0;

  constructor(isMobile: boolean = false) {
    this.isMobile = isMobile;
    this.group = new THREE.Group();
    this.mainWaveGroup = new THREE.Group();
    this.aiNetworkGroup = new THREE.Group();

    // 1. Lighting Setup
    this.lightsGroup = new THREE.Group();
    const ambientLight = new THREE.AmbientLight(0x0f172a, 2.0);
    const keyLight = new THREE.DirectionalLight(0x3b82f6, 3.2);
    keyLight.position.set(5, 5, 5);

    const rimLight = new THREE.DirectionalLight(0x8b5cf6, 1.8);
    rimLight.position.set(-5, -3, -2);

    const accentLight = new THREE.PointLight(0x06b6d4, 3.5, 12);
    accentLight.position.set(2, 0, 2);

    this.lightsGroup.add(ambientLight, keyLight, rimLight, accentLight);
    this.group.add(this.lightsGroup);

    const blueColor = new THREE.Color(0x3b82f6); // Electric Blue
    const cyanColor = new THREE.Color(0x06b6d4); // Cyan
    const purpleColor = new THREE.Color(0x8b5cf6); // Subtle Violet

    // Shared Node Sprite Texture
    const nodeCanvas = document.createElement("canvas");
    nodeCanvas.width = 32;
    nodeCanvas.height = 32;
    const nCtx = nodeCanvas.getContext("2d");
    if (nCtx) {
      const grad = nCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      grad.addColorStop(0.35, "rgba(34, 211, 238, 0.85)");
      grad.addColorStop(0.7, "rgba(59, 130, 246, 0.3)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      nCtx.fillStyle = grad;
      nCtx.fillRect(0, 0, 32, 32);
    }
    const nodeTexture = new THREE.CanvasTexture(nodeCanvas);

    // 2. Build Secondary AI Computational Network on the LEFT
    const numAINodes = isMobile ? 6 : 16;
    this.aiPositions = new Float32Array(numAINodes * 3);
    this.aiColors = new Float32Array(numAINodes * 3);

    for (let i = 0; i < numAINodes; i++) {
      const x = -4.1 + (i / numAINodes) * 2.3 + (Math.random() - 0.5) * 0.4;
      const y = (Math.random() - 0.5) * 5.4;
      const z = -0.8 + (Math.random() - 0.5) * 0.6;

      const pos = new THREE.Vector3(x, y, z);
      this.aiNodes.push({
        pos: pos.clone(),
        basePos: pos.clone(),
        phase: Math.random() * Math.PI * 2,
      });

      const i3 = i * 3;
      this.aiPositions[i3] = x;
      this.aiPositions[i3 + 1] = y;
      this.aiPositions[i3 + 2] = z;

      const c = i % 3 === 0 ? cyanColor : i % 2 === 0 ? blueColor : purpleColor;
      this.aiColors[i3] = c.r * 0.65;
      this.aiColors[i3 + 1] = c.g * 0.65;
      this.aiColors[i3 + 2] = c.b * 0.65;
    }

    for (let i = 0; i < numAINodes; i++) {
      for (let j = i + 1; j < numAINodes; j++) {
        const d = this.aiNodes[i].pos.distanceTo(this.aiNodes[j].pos);
        if (d < 2.2) {
          this.aiConnections.push({ fromIdx: i, toIdx: j });
        }
      }
    }

    const aiPointsGeo = new THREE.BufferGeometry();
    aiPointsGeo.setAttribute("position", new THREE.BufferAttribute(this.aiPositions, 3));
    aiPointsGeo.setAttribute("color", new THREE.BufferAttribute(this.aiColors, 3));

    const aiPointsMat = new THREE.PointsMaterial({
      size: isMobile ? 0.10 : 0.14,
      map: nodeTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.aiPointsMesh = new THREE.Points(aiPointsGeo, aiPointsMat);
    this.aiNetworkGroup.add(this.aiPointsMesh);

    // AI Connecting Lines
    this.aiLinePositions = new Float32Array(this.aiConnections.length * 6);
    this.aiLineColors = new Float32Array(this.aiConnections.length * 6);

    for (let i = 0; i < this.aiConnections.length; i++) {
      const conn = this.aiConnections[i];
      const p1 = this.aiNodes[conn.fromIdx].pos;
      const p2 = this.aiNodes[conn.toIdx].pos;

      const i6 = i * 6;
      this.aiLinePositions[i6] = p1.x;
      this.aiLinePositions[i6 + 1] = p1.y;
      this.aiLinePositions[i6 + 2] = p1.z;
      this.aiLinePositions[i6 + 3] = p2.x;
      this.aiLinePositions[i6 + 4] = p2.y;
      this.aiLinePositions[i6 + 5] = p2.z;

      this.aiLineColors[i6] = cyanColor.r * 0.28;
      this.aiLineColors[i6 + 1] = cyanColor.g * 0.28;
      this.aiLineColors[i6 + 2] = cyanColor.b * 0.28;
      this.aiLineColors[i6 + 3] = blueColor.r * 0.28;
      this.aiLineColors[i6 + 4] = blueColor.g * 0.28;
      this.aiLineColors[i6 + 5] = blueColor.b * 0.28;
    }

    const aiLinesGeo = new THREE.BufferGeometry();
    aiLinesGeo.setAttribute("position", new THREE.BufferAttribute(this.aiLinePositions, 3));
    aiLinesGeo.setAttribute("color", new THREE.BufferAttribute(this.aiLineColors, 3));

    const aiLinesMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.24,
      blending: THREE.AdditiveBlending,
    });
    this.aiLinesMesh = new THREE.LineSegments(aiLinesGeo, aiLinesMat);
    this.aiNetworkGroup.add(this.aiLinesMesh);

    // AI Data Pulses
    const numAIPulses = isMobile ? 3 : 10;
    const aiPulsePositions = new Float32Array(numAIPulses * 3);
    const aiPulseColors = new Float32Array(numAIPulses * 3);

    for (let i = 0; i < numAIPulses; i++) {
      if (this.aiConnections.length > 0) {
        const conn = this.aiConnections[i % this.aiConnections.length];
        this.aiPulses.push({
          from: this.aiNodes[conn.fromIdx].pos,
          to: this.aiNodes[conn.toIdx].pos,
          progress: Math.random(),
          speed: 0.18 + Math.random() * 0.16,
        });
      }
      const i3 = i * 3;
      aiPulseColors[i3] = cyanColor.r * 0.9;
      aiPulseColors[i3 + 1] = cyanColor.g * 0.9;
      aiPulseColors[i3 + 2] = cyanColor.b * 0.9;
    }

    const aiPulsesGeo = new THREE.BufferGeometry();
    aiPulsesGeo.setAttribute("position", new THREE.BufferAttribute(aiPulsePositions, 3));
    aiPulsesGeo.setAttribute("color", new THREE.BufferAttribute(aiPulseColors, 3));

    const aiPulsesMat = new THREE.PointsMaterial({
      size: 0.14,
      map: nodeTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.aiPulsesMesh = new THREE.Points(aiPulsesGeo, aiPulsesMat);
    this.aiNetworkGroup.add(this.aiPulsesMesh);

    // 3. Transition Streams (Left AI Network -> Right DeltaWave)
    const numTransitions = isMobile ? 2 : 5;
    const transPositions = new Float32Array(numTransitions * 6);
    const transColors = new Float32Array(numTransitions * 6);

    for (let i = 0; i < numTransitions; i++) {
      const fromNode = this.aiNodes[i % numAINodes];
      const i6 = i * 6;

      transPositions[i6] = fromNode.pos.x;
      transPositions[i6 + 1] = fromNode.pos.y;
      transPositions[i6 + 2] = fromNode.pos.z;
      transPositions[i6 + 3] = 0.6;
      transPositions[i6 + 4] = (i - 2.0) * 1.4;
      transPositions[i6 + 5] = -1.1;

      transColors[i6] = cyanColor.r * 0.18;
      transColors[i6 + 1] = cyanColor.g * 0.18;
      transColors[i6 + 2] = cyanColor.b * 0.18;
      transColors[i6 + 3] = blueColor.r * 0.22;
      transColors[i6 + 4] = blueColor.g * 0.22;
      transColors[i6 + 5] = blueColor.b * 0.22;

      this.transitionPulses.push({
        from: fromNode.pos,
        to: new THREE.Vector3(0.6, (i - 2.0) * 1.4, -1.1),
        progress: Math.random(),
        speed: 0.14 + Math.random() * 0.14,
      });
    }

    const transLinesGeo = new THREE.BufferGeometry();
    transLinesGeo.setAttribute("position", new THREE.BufferAttribute(transPositions, 3));
    transLinesGeo.setAttribute("color", new THREE.BufferAttribute(transColors, 3));

    const transLinesMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    this.transitionLinesMesh = new THREE.LineSegments(transLinesGeo, transLinesMat);
    this.aiNetworkGroup.add(this.transitionLinesMesh);

    const transPulsesGeo = new THREE.BufferGeometry();
    transPulsesGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(numTransitions * 3), 3));
    transPulsesGeo.setAttribute("color", new THREE.BufferAttribute(aiPulseColors, 3));

    this.transitionPulsesMesh = new THREE.Points(transPulsesGeo, aiPulsesMat);
    this.aiNetworkGroup.add(this.transitionPulsesMesh);

    // 4. Main DeltaWave Setup (RIGHT Side)
    this.uSamples = isMobile ? 24 : 44;
    this.vSamples = isMobile ? 10 : 18;

    const totalNodes = this.uSamples * this.vSamples;
    this.mainPositions = new Float32Array(totalNodes * 3);
    this.mainColors = new Float32Array(totalNodes * 3);

    for (let uIdx = 0; uIdx < this.uSamples; uIdx++) {
      const u = uIdx / (this.uSamples - 1);
      const widthEnv = Math.sin(Math.pow(u, 0.7) * Math.PI * 0.85) * 0.75 + 0.35;

      for (let vIdx = 0; vIdx < this.vSamples; vIdx++) {
        const v = (vIdx / (this.vSamples - 1) - 0.5) * 2.0;
        const nodeIdx = uIdx * this.vSamples + vIdx;

        const baseX = 1.4 + Math.sin(u * Math.PI * 1.3) * 1.15 + v * 0.7 * widthEnv;
        const baseY = (0.5 - u) * 6.2 + Math.cos(u * Math.PI * 1.6) * 0.7;
        const baseZ = Math.sin(u * Math.PI * 2.0) * 0.85 - u * 0.4 + v * 0.3;

        const pos = new THREE.Vector3(baseX, baseY, baseZ);
        this.mainNodes.push({
          u,
          v,
          basePos: pos.clone(),
          pos: pos.clone(),
          phase: u * Math.PI * 2.8 + v * Math.PI * 1.2,
        });

        const i3 = nodeIdx * 3;
        this.mainPositions[i3] = baseX;
        this.mainPositions[i3 + 1] = baseY;
        this.mainPositions[i3 + 2] = baseZ;

        const depthAlpha = Math.max(0.25, Math.min(1.0, (baseZ + 1.2) / 2.2));
        const leftAlpha = Math.pow(Math.max(0, Math.min(1, (baseX + 0.3) / 2.6)), 1.5);
        const alpha = depthAlpha * leftAlpha;

        const color = vIdx % 3 === 0 ? cyanColor : vIdx % 2 === 0 ? blueColor : purpleColor;
        this.mainColors[i3] = color.r * alpha;
        this.mainColors[i3 + 1] = color.g * alpha;
        this.mainColors[i3 + 2] = color.b * alpha;
      }
    }

    const mainPointsGeo = new THREE.BufferGeometry();
    mainPointsGeo.setAttribute("position", new THREE.BufferAttribute(this.mainPositions, 3));
    mainPointsGeo.setAttribute("color", new THREE.BufferAttribute(this.mainColors, 3));

    const mainPointsMat = new THREE.PointsMaterial({
      size: isMobile ? 0.09 : 0.12,
      map: nodeTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.mainPointsMesh = new THREE.Points(mainPointsGeo, mainPointsMat);
    this.mainWaveGroup.add(this.mainPointsMesh);

    // Main Wave Wire Lines
    const numMainLines = (this.uSamples - 1) * this.vSamples + this.uSamples * (this.vSamples - 1);
    this.mainLinePositions = new Float32Array(numMainLines * 6);
    this.mainLineColors = new Float32Array(numMainLines * 6);

    let lineIdx = 0;
    for (let uIdx = 0; uIdx < this.uSamples; uIdx++) {
      for (let vIdx = 0; vIdx < this.vSamples; vIdx++) {
        const currIdx = uIdx * this.vSamples + vIdx;

        if (uIdx < this.uSamples - 1) {
          const nextUIdx = currIdx + this.vSamples;
          this.setLineSegment(this.mainLinePositions, this.mainLineColors, lineIdx, currIdx, nextUIdx, blueColor, cyanColor);
          lineIdx++;
        }
        if (vIdx < this.vSamples - 1) {
          const nextVIdx = currIdx + 1;
          this.setLineSegment(this.mainLinePositions, this.mainLineColors, lineIdx, currIdx, nextVIdx, blueColor, purpleColor);
          lineIdx++;
        }
      }
    }

    const mainLinesGeo = new THREE.BufferGeometry();
    mainLinesGeo.setAttribute("position", new THREE.BufferAttribute(this.mainLinePositions, 3));
    mainLinesGeo.setAttribute("color", new THREE.BufferAttribute(this.mainLineColors, 3));

    const mainLinesMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    this.mainLinesMesh = new THREE.LineSegments(mainLinesGeo, mainLinesMat);
    this.mainWaveGroup.add(this.mainLinesMesh);

    // Secondary Background Wave Trace
    this.bgLinePositions = new Float32Array(numMainLines * 6);
    this.bgLineColors = new Float32Array(numMainLines * 6);

    for (let i = 0; i < this.mainNodes.length; i++) {
      const mn = this.mainNodes[i];
      const bgPos = mn.basePos.clone().add(new THREE.Vector3(0.35, 0.15, -1.1));
      this.bgNodes.push({
        u: mn.u,
        v: mn.v,
        basePos: bgPos.clone(),
        pos: bgPos.clone(),
        phase: mn.phase + 1.2,
      });
    }

    let bgLineIdx = 0;
    for (let uIdx = 0; uIdx < this.uSamples; uIdx++) {
      for (let vIdx = 0; vIdx < this.vSamples; vIdx++) {
        const currIdx = uIdx * this.vSamples + vIdx;

        if (uIdx < this.uSamples - 1) {
          const nextUIdx = currIdx + this.vSamples;
          this.setBgLineSegment(bgLineIdx, currIdx, nextUIdx, purpleColor, blueColor);
          bgLineIdx++;
        }
        if (vIdx < this.vSamples - 1) {
          const nextVIdx = currIdx + 1;
          this.setBgLineSegment(bgLineIdx, currIdx, nextVIdx, purpleColor, blueColor);
          bgLineIdx++;
        }
      }
    }

    const bgLinesGeo = new THREE.BufferGeometry();
    bgLinesGeo.setAttribute("position", new THREE.BufferAttribute(this.bgLinePositions, 3));
    bgLinesGeo.setAttribute("color", new THREE.BufferAttribute(this.bgLineColors, 3));

    const bgLinesMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
    });
    this.bgLinesMesh = new THREE.LineSegments(bgLinesGeo, bgLinesMat);
    this.mainWaveGroup.add(this.bgLinesMesh);

    // Main Wave Data Pulses
    const numPulses = isMobile ? 6 : 14;
    this.pulsePositions = new Float32Array(numPulses * 3);
    this.pulseColors = new Float32Array(numPulses * 3);

    for (let i = 0; i < numPulses; i++) {
      const isBrightPulse = i % 4 === 0;
      this.pulses.push({
        u: Math.random(),
        vIdx: Math.floor(Math.random() * this.vSamples),
        speed: isBrightPulse ? 0.25 + Math.random() * 0.15 : 0.14 + Math.random() * 0.14,
        isBrightPulse,
      });

      const pColor = isBrightPulse ? new THREE.Color(0xffffff) : new THREE.Color(0x22d3ee);
      const i3 = i * 3;
      this.pulseColors[i3] = pColor.r;
      this.pulseColors[i3 + 1] = pColor.g;
      this.pulseColors[i3 + 2] = pColor.b;
    }

    const pulsesGeo = new THREE.BufferGeometry();
    pulsesGeo.setAttribute("position", new THREE.BufferAttribute(this.pulsePositions, 3));
    pulsesGeo.setAttribute("color", new THREE.BufferAttribute(this.pulseColors, 3));

    const pulsesMat = new THREE.PointsMaterial({
      size: isMobile ? 0.12 : 0.16,
      map: nodeTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.pulsesMesh = new THREE.Points(pulsesGeo, pulsesMat);
    this.mainWaveGroup.add(this.pulsesMesh);

    this.group.add(this.aiNetworkGroup);
    this.group.add(this.mainWaveGroup);

    this.updatePosition(window.innerWidth);
  }

  private setLineSegment(
    linePos: Float32Array,
    lineCol: Float32Array,
    lineIdx: number,
    idx1: number,
    idx2: number,
    c1: THREE.Color,
    c2: THREE.Color
  ) {
    const p1 = this.mainNodes[idx1];
    const p2 = this.mainNodes[idx2];
    const i6 = lineIdx * 6;

    linePos[i6] = p1.pos.x;
    linePos[i6 + 1] = p1.pos.y;
    linePos[i6 + 2] = p1.pos.z;
    linePos[i6 + 3] = p2.pos.x;
    linePos[i6 + 4] = p2.pos.y;
    linePos[i6 + 5] = p2.pos.z;

    const depthAlpha1 = Math.max(0.2, Math.min(1.0, (p1.pos.z + 1.2) / 2.2));
    const leftAlpha1 = Math.pow(Math.max(0, Math.min(1, (p1.pos.x + 0.3) / 2.6)), 1.5);
    const alpha1 = depthAlpha1 * leftAlpha1;

    const depthAlpha2 = Math.max(0.2, Math.min(1.0, (p2.pos.z + 1.2) / 2.2));
    const leftAlpha2 = Math.pow(Math.max(0, Math.min(1, (p2.pos.x + 0.3) / 2.6)), 1.5);
    const alpha2 = depthAlpha2 * leftAlpha2;

    lineCol[i6] = c1.r * 0.32 * alpha1;
    lineCol[i6 + 1] = c1.g * 0.32 * alpha1;
    lineCol[i6 + 2] = c1.b * 0.32 * alpha1;
    lineCol[i6 + 3] = c2.r * 0.32 * alpha2;
    lineCol[i6 + 4] = c2.g * 0.32 * alpha2;
    lineCol[i6 + 5] = c2.b * 0.32 * alpha2;
  }

  private setBgLineSegment(
    lineIdx: number,
    idx1: number,
    idx2: number,
    c1: THREE.Color,
    c2: THREE.Color
  ) {
    const p1 = this.bgNodes[idx1];
    const p2 = this.bgNodes[idx2];
    const i6 = lineIdx * 6;

    this.bgLinePositions[i6] = p1.pos.x;
    this.bgLinePositions[i6 + 1] = p1.pos.y;
    this.bgLinePositions[i6 + 2] = p1.pos.z;
    this.bgLinePositions[i6 + 3] = p2.pos.x;
    this.bgLinePositions[i6 + 4] = p2.pos.y;
    this.bgLinePositions[i6 + 5] = p2.pos.z;

    const alpha1 = Math.pow(Math.max(0, Math.min(1, (p1.pos.x + 0.3) / 2.6)), 1.5);
    const alpha2 = Math.pow(Math.max(0, Math.min(1, (p2.pos.x + 0.3) / 2.6)), 1.5);

    this.bgLineColors[i6] = c1.r * 0.14 * alpha1;
    this.bgLineColors[i6 + 1] = c1.g * 0.14 * alpha1;
    this.bgLineColors[i6 + 2] = c1.b * 0.14 * alpha1;
    this.bgLineColors[i6 + 3] = c2.r * 0.14 * alpha2;
    this.bgLineColors[i6 + 4] = c2.g * 0.14 * alpha2;
    this.bgLineColors[i6 + 5] = c2.b * 0.14 * alpha2;
  }

  public updatePosition(width: number) {
    if (width < 768) {
      // Mobile: Centered behind/above text, low scale & opacity
      this.group.position.set(0, 0.9, -1.4);
      this.group.rotation.set(Math.PI / 6, 0, 0);
      this.group.scale.set(0.45, 0.45, 0.45);
      this.aiNetworkGroup.visible = false;
    } else if (width < 1024) {
      // Tablet: Shifted right
      this.group.position.set(1.0, 0.1, -0.5);
      this.group.rotation.set(Math.PI / 8, -Math.PI / 12, 0);
      this.group.scale.set(0.72, 0.72, 0.72);
      this.aiNetworkGroup.visible = true;
    } else {
      // Desktop: Main Delta Wave Ribbon at x = 1.45, Left AI Network at far left
      this.group.position.set(1.45, 0.05, -0.4);
      this.group.rotation.set(Math.PI / 7, -Math.PI / 10, Math.PI / 18);
      this.group.scale.set(0.95, 0.95, 0.95);
      this.aiNetworkGroup.visible = true;
    }
  }

  public setMousePosition(x: number, y: number) {
    this.mouseWorld.x = x * 3.2;
    this.mouseWorld.y = y * 2.0;
  }

  public setSectionInterpolation(params: SectionParams) {
    this.group.position.x = params.waveX;
    this.mainWaveGroup.position.y = params.waveY;
    this.group.position.z = params.waveZ;
    this.group.scale.set(params.scale, params.scale, params.scale);

    (this.mainPointsMesh.material as THREE.PointsMaterial).opacity = params.waveOpacity;
    (this.mainLinesMesh.material as THREE.LineBasicMaterial).opacity = params.lineOpacity;
    (this.bgLinesMesh.material as THREE.LineBasicMaterial).opacity = params.lineOpacity * 0.45;

    (this.aiPointsMesh.material as THREE.PointsMaterial).opacity = params.aiOpacity;
    (this.aiLinesMesh.material as THREE.LineBasicMaterial).opacity = params.aiLineOpacity;
    (this.transitionLinesMesh.material as THREE.LineBasicMaterial).opacity = params.aiLineOpacity * 0.7;

    this.currentSpeed = params.speed;
    this.gridStructureFactor = params.gridStructureFactor;
  }

  public update(time: number, delta: number, reducedMotion: boolean = false) {
    if (reducedMotion) return;

    const speed = this.isMobile ? 0.18 : this.currentSpeed;

    const blueColor = new THREE.Color(0x3b82f6);
    const cyanColor = new THREE.Color(0x06b6d4);
    const purpleColor = new THREE.Color(0x8b5cf6);

    // 1. Update Left AI Network Nodes & Pulses
    if (this.aiNetworkGroup.visible) {
      for (let i = 0; i < this.aiNodes.length; i++) {
        const node = this.aiNodes[i];
        node.pos.x = node.basePos.x + Math.sin(time * 0.4 + node.phase) * 0.05;
        node.pos.y = node.basePos.y + Math.cos(time * 0.35 + node.phase) * 0.05;
        node.pos.z = node.basePos.z + Math.sin(time * 0.5 + node.phase) * 0.05;

        const i3 = i * 3;
        this.aiPositions[i3] = node.pos.x;
        this.aiPositions[i3 + 1] = node.pos.y;
        this.aiPositions[i3 + 2] = node.pos.z;
      }
      (this.aiPointsMesh.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      // Update AI Connecting Lines
      const aiLinePosArr = (this.aiLinesMesh.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
      for (let i = 0; i < this.aiConnections.length; i++) {
        const conn = this.aiConnections[i];
        const p1 = this.aiNodes[conn.fromIdx].pos;
        const p2 = this.aiNodes[conn.toIdx].pos;
        const i6 = i * 6;
        aiLinePosArr[i6] = p1.x;
        aiLinePosArr[i6 + 1] = p1.y;
        aiLinePosArr[i6 + 2] = p1.z;
        aiLinePosArr[i6 + 3] = p2.x;
        aiLinePosArr[i6 + 4] = p2.y;
        aiLinePosArr[i6 + 5] = p2.z;
      }
      (this.aiLinesMesh.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      // Update AI Pulses
      const aiPulsePosArr = (this.aiPulsesMesh.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
      for (let i = 0; i < this.aiPulses.length; i++) {
        const pulse = this.aiPulses[i];
        pulse.progress += delta * pulse.speed * speed;
        if (pulse.progress >= 1.0) {
          pulse.progress = 0;
          if (this.aiConnections.length > 0) {
            const randomConn = this.aiConnections[Math.floor(Math.random() * this.aiConnections.length)];
            pulse.from = this.aiNodes[randomConn.fromIdx].pos;
            pulse.to = this.aiNodes[randomConn.toIdx].pos;
          }
        }
        const i3 = i * 3;
        aiPulsePosArr[i3] = THREE.MathUtils.lerp(pulse.from.x, pulse.to.x, pulse.progress);
        aiPulsePosArr[i3 + 1] = THREE.MathUtils.lerp(pulse.from.y, pulse.to.y, pulse.progress);
        aiPulsePosArr[i3 + 2] = THREE.MathUtils.lerp(pulse.from.z, pulse.to.z, pulse.progress);
      }
      (this.aiPulsesMesh.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      // Update Transition Pulses (AI -> DeltaWave)
      const transPulsePosArr = (this.transitionPulsesMesh.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
      for (let i = 0; i < this.transitionPulses.length; i++) {
        const tp = this.transitionPulses[i];
        tp.progress += delta * tp.speed * speed;
        if (tp.progress >= 1.0) {
          tp.progress = 0;
        }
        const i3 = i * 3;
        transPulsePosArr[i3] = THREE.MathUtils.lerp(tp.from.x, tp.to.x, tp.progress);
        transPulsePosArr[i3 + 1] = THREE.MathUtils.lerp(tp.from.y, tp.to.y, tp.progress);
        transPulsePosArr[i3 + 2] = THREE.MathUtils.lerp(tp.from.z, tp.to.z, tp.progress);
      }
      (this.transitionPulsesMesh.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    }

    // 2. Update Main Flowing Wave Ribbon Surface (RIGHT side)
    const mainColAttr = this.mainPointsMesh.geometry.attributes.color as THREE.BufferAttribute;
    const mainColArr = mainColAttr.array as Float32Array;

    for (let i = 0; i < this.mainNodes.length; i++) {
      const node = this.mainNodes[i];

      const wave1 = Math.sin(node.u * Math.PI * 3.2 + time * 1.1 * speed + node.v * 1.4) * 0.42;
      const wave2 = Math.cos(node.u * Math.PI * 1.8 - time * 0.75 * speed + node.v * 1.8) * 0.32;
      const wave3 = Math.sin((node.u + node.v) * Math.PI * 1.6 + time * 1.3 * speed) * 0.18;

      // Structural Grid Lattice Effect for Technologies Section (gridStructureFactor > 0)
      const gridDisplacement = this.gridStructureFactor * Math.sin(node.u * 12.0) * 0.15;

      const distToMouse = Math.hypot(node.basePos.x - this.mouseWorld.x, node.basePos.y - this.mouseWorld.y);
      const mouseInfluence = Math.max(0, 1 - distToMouse / 2.0);
      const mouseDisplace = mouseInfluence * 0.25 * Math.sin(time * 2.2 + distToMouse);

      node.pos.x = node.basePos.x + Math.sin(time * 0.35 + node.u * 2.5) * 0.05;
      node.pos.y = node.basePos.y + Math.cos(time * 0.3 + node.u * 2.0) * 0.05;
      node.pos.z = node.basePos.z + wave1 + wave2 + wave3 + gridDisplacement + mouseDisplace;

      const i3 = i * 3;
      this.mainPositions[i3] = node.pos.x;
      this.mainPositions[i3 + 1] = node.pos.y;
      this.mainPositions[i3 + 2] = node.pos.z;

      const depthAlpha = Math.max(0.25, Math.min(1.0, (node.pos.z + 1.2) / 2.2));
      const leftAlpha = Math.pow(Math.max(0, Math.min(1, (node.pos.x + 0.3) / 2.6)), 1.5);
      const alpha = depthAlpha * leftAlpha;

      const color = node.v % 3 === 0 ? cyanColor : node.v % 2 === 0 ? blueColor : purpleColor;
      mainColArr[i3] = color.r * alpha;
      mainColArr[i3 + 1] = color.g * alpha;
      mainColArr[i3 + 2] = color.b * alpha;

      const bgNode = this.bgNodes[i];
      const bgWave = Math.sin(bgNode.u * Math.PI * 2.8 + time * 0.7 * speed + bgNode.v * 1.1) * 0.32;
      bgNode.pos.x = bgNode.basePos.x;
      bgNode.pos.y = bgNode.basePos.y;
      bgNode.pos.z = bgNode.basePos.z + bgWave;
    }

    const posAttr = this.mainPointsMesh.geometry.attributes.position as THREE.BufferAttribute;
    posAttr.needsUpdate = true;
    mainColAttr.needsUpdate = true;

    // 3. Update Main Wire Lines
    const linePosAttr = this.mainLinesMesh.geometry.attributes.position as THREE.BufferAttribute;
    const lineArr = linePosAttr.array as Float32Array;

    let lineIdx = 0;
    for (let uIdx = 0; uIdx < this.uSamples; uIdx++) {
      for (let vIdx = 0; vIdx < this.vSamples; vIdx++) {
        const currIdx = uIdx * this.vSamples + vIdx;
        const p1 = this.mainNodes[currIdx];

        if (uIdx < this.uSamples - 1) {
          const nextUIdx = currIdx + this.vSamples;
          const p2 = this.mainNodes[nextUIdx];
          const i6 = lineIdx * 6;

          lineArr[i6] = p1.pos.x;
          lineArr[i6 + 1] = p1.pos.y;
          lineArr[i6 + 2] = p1.pos.z;
          lineArr[i6 + 3] = p2.pos.x;
          lineArr[i6 + 4] = p2.pos.y;
          lineArr[i6 + 5] = p2.pos.z;
          lineIdx++;
        }

        if (vIdx < this.vSamples - 1) {
          const nextVIdx = currIdx + 1;
          const p2 = this.mainNodes[nextVIdx];
          const i6 = lineIdx * 6;

          lineArr[i6] = p1.pos.x;
          lineArr[i6 + 1] = p1.pos.y;
          lineArr[i6 + 2] = p1.pos.z;
          lineArr[i6 + 3] = p2.pos.x;
          lineArr[i6 + 4] = p2.pos.y;
          lineArr[i6 + 5] = p2.pos.z;
          lineIdx++;
        }
      }
    }
    linePosAttr.needsUpdate = true;

    // 4. Update Background Layer Lines
    const bgLinePosAttr = this.bgLinesMesh.geometry.attributes.position as THREE.BufferAttribute;
    const bgLineArr = bgLinePosAttr.array as Float32Array;

    let bgLineIdx = 0;
    for (let uIdx = 0; uIdx < this.uSamples; uIdx++) {
      for (let vIdx = 0; vIdx < this.vSamples; vIdx++) {
        const currIdx = uIdx * this.vSamples + vIdx;
        const p1 = this.bgNodes[currIdx];

        if (uIdx < this.uSamples - 1) {
          const nextUIdx = currIdx + this.vSamples;
          const p2 = this.bgNodes[nextUIdx];
          const i6 = bgLineIdx * 6;

          bgLineArr[i6] = p1.pos.x;
          bgLineArr[i6 + 1] = p1.pos.y;
          bgLineArr[i6 + 2] = p1.pos.z;
          bgLineArr[i6 + 3] = p2.pos.x;
          bgLineArr[i6 + 4] = p2.pos.y;
          bgLineArr[i6 + 5] = p2.pos.z;
          bgLineIdx++;
        }

        if (vIdx < this.vSamples - 1) {
          const nextVIdx = currIdx + 1;
          const p2 = this.bgNodes[nextVIdx];
          const i6 = bgLineIdx * 6;

          bgLineArr[i6] = p1.pos.x;
          bgLineArr[i6 + 1] = p1.pos.y;
          bgLineArr[i6 + 2] = p1.pos.z;
          bgLineArr[i6 + 3] = p2.pos.x;
          bgLineArr[i6 + 4] = p2.pos.y;
          bgLineArr[i6 + 5] = p2.pos.z;
          bgLineIdx++;
        }
      }
    }
    bgLinePosAttr.needsUpdate = true;

    // 5. Update Main Wave Data Pulses
    const pulsePosAttr = this.pulsesMesh.geometry.attributes.position as THREE.BufferAttribute;
    const pulseArr = pulsePosAttr.array as Float32Array;

    for (let i = 0; i < this.pulses.length; i++) {
      const pulse = this.pulses[i];
      pulse.u += delta * pulse.speed * speed * 0.3;

      if (pulse.u >= 1.0) {
        pulse.u = 0;
        pulse.vIdx = Math.floor(Math.random() * this.vSamples);
      }

      const uIdx = Math.floor(pulse.u * (this.uSamples - 1));
      const nextUIdx = Math.min(uIdx + 1, this.uSamples - 1);
      const frac = pulse.u * (this.uSamples - 1) - uIdx;

      const node1 = this.mainNodes[uIdx * this.vSamples + pulse.vIdx];
      const node2 = this.mainNodes[nextUIdx * this.vSamples + pulse.vIdx];

      const i3 = i * 3;
      pulseArr[i3] = THREE.MathUtils.lerp(node1.pos.x, node2.pos.x, frac);
      pulseArr[i3 + 1] = THREE.MathUtils.lerp(node1.pos.y, node2.pos.y, frac);
      pulseArr[i3 + 2] = THREE.MathUtils.lerp(node1.pos.z, node2.pos.z, frac) + 0.05;
    }
    pulsePosAttr.needsUpdate = true;

    this.mainWaveGroup.rotation.z = Math.sin(time * 0.08) * 0.015;
  }

  public dispose() {
    this.mainPointsMesh.geometry.dispose();
    (this.mainPointsMesh.material as THREE.Material).dispose();

    this.mainLinesMesh.geometry.dispose();
    (this.mainLinesMesh.material as THREE.Material).dispose();

    this.bgLinesMesh.geometry.dispose();
    (this.bgLinesMesh.material as THREE.Material).dispose();

    this.pulsesMesh.geometry.dispose();
    (this.pulsesMesh.material as THREE.Material).dispose();

    this.aiPointsMesh.geometry.dispose();
    (this.aiPointsMesh.material as THREE.Material).dispose();

    this.aiLinesMesh.geometry.dispose();
    (this.aiLinesMesh.material as THREE.Material).dispose();

    this.aiPulsesMesh.geometry.dispose();
    (this.aiPulsesMesh.material as THREE.Material).dispose();

    this.transitionLinesMesh.geometry.dispose();
    (this.transitionLinesMesh.material as THREE.Material).dispose();

    this.transitionPulsesMesh.geometry.dispose();
    (this.transitionPulsesMesh.material as THREE.Material).dispose();
  }
}
