import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const FALL_TIME = 0.55;

const DROP = 7;

const ROTATE_Y = Math.PI;

export type BuildScene = {
  model: THREE.Object3D;
  camera: THREE.PerspectiveCamera;

  blocks: number;

  setCount: (n: number, instant?: boolean) => void;

  setShift: (x: number) => void;
};

function tagBlocks(meshes: THREE.Mesh[]) {
  const cells = new Map<
    string,
    { x: number; y: number; z: number; order: number }
  >();
  const perMesh: { geo: THREE.BufferGeometry; keys: string[] }[] = [];
  const a = new THREE.Vector3();
  const c = new THREE.Vector3();
  const n = new THREE.Vector3();

  for (const mesh of meshes) {
    const geo = mesh.geometry.index
      ? mesh.geometry.toNonIndexed()
      : mesh.geometry;
    const pos = geo.getAttribute("position");
    const nor = geo.getAttribute("normal");
    const keys: string[] = [];
    for (let i = 0; i < pos.count; i += 3) {
      c.set(0, 0, 0);
      for (let k = 0; k < 3; k++) c.add(a.fromBufferAttribute(pos, i + k));
      c.divideScalar(3);

      n.fromBufferAttribute(nor, i);
      c.addScaledVector(n, -0.01);
      const x = Math.floor(c.x);
      const y = Math.floor(c.y);
      const z = Math.floor(c.z);
      const key = `${x},${y},${z}`;
      if (!cells.has(key))
        cells.set(key, { x, y, z, order: y + Math.random() * 0.9 });
      keys.push(key);
    }
    perMesh.push({ geo, keys });
    mesh.geometry = geo;
    mesh.frustumCulled = false;
  }

  const sorted = [...cells.values()].sort((p, q) => p.order - q.order);
  const indexOf = new Map(
    sorted.map((cell, i) => [`${cell.x},${cell.y},${cell.z}`, i]),
  );

  for (const { geo, keys } of perMesh) {
    const count = geo.getAttribute("position").count;
    const center = new Float32Array(count * 3);
    const index = new Float32Array(count);
    keys.forEach((key, tri) => {
      const [x, y, z] = key.split(",").map(Number);
      const i = indexOf.get(key)!;
      for (let k = 0; k < 3; k++) {
        const v = tri * 3 + k;
        center.set([x + 0.5, y + 0.5, z + 0.5], v * 3);
        index[v] = i;
      }
    });
    geo.setAttribute("aCenter", new THREE.BufferAttribute(center, 3));
    geo.setAttribute("aIndex", new THREE.BufferAttribute(index, 1));
  }

  return { blocks: sorted.length };
}

function patchMaterial(
  mat: THREE.Material,
  uniforms: Record<string, THREE.IUniform>,
) {
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
				attribute vec3 aCenter;
				attribute float aIndex;
				uniform sampler2D uState;
				uniform float uBlocks;
				uniform float uDrop;`,
      )
      .replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
				float t = texture2D(uState, vec2((aIndex + 0.5) / uBlocks, 0.5)).r;
				float fall = 1.0 - t;
				fall = fall * fall * fall;
				float s = smoothstep(0.0, 0.25, t);
				float land = smoothstep(0.55, 0.8, t) * (1.0 - smoothstep(0.8, 1.0, t));
				vec3 local = (transformed - aCenter) * s;
				local.y *= 1.0 - land * 0.18;
				local.xz *= 1.0 + land * 0.1;
				transformed = aCenter + local;
				transformed.y += fall * uDrop;`,
      );
  };
  mat.needsUpdate = true;
}

export async function mountBuild(
  el: HTMLElement,
  url: string,
  onLoadProgress?: (p: number) => void,
): Promise<BuildScene> {
  const gltf = await new GLTFLoader().loadAsync(url, (e) => {
    if (e.total) onLoadProgress?.(e.loaded / e.total);
  });
  const model = gltf.scene;

  const meshes: THREE.Mesh[] = [];
  model.traverse((o) => {
    if ((o as THREE.Mesh).isMesh) meshes.push(o as THREE.Mesh);
  });
  const { blocks } = tagBlocks(meshes);

  const state = new Float32Array(blocks);
  const stateTex = new THREE.DataTexture(
    state,
    blocks,
    1,
    THREE.RedFormat,
    THREE.FloatType,
  );
  stateTex.needsUpdate = true;

  const uniforms = {
    uState: { value: stateTex },
    uBlocks: { value: blocks },
    uDrop: { value: DROP },
  };
  for (const mesh of meshes) {
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const m of mats) {
      const map = (m as THREE.MeshStandardMaterial).map;
      if (map) map.magFilter = THREE.NearestFilter;
      patchMaterial(m, uniforms);
    }
  }

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  el.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xfff4ec, 0x2a2124, 2.4));
  const sun = new THREE.DirectionalLight(0xffffff, 2.2);
  sun.position.set(6, 12, 4);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0xe5343f, 1.4);
  rim.position.set(-8, 4, -6);
  scene.add(rim);

  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  model.position.sub(center);
  const pivot = new THREE.Group();
  pivot.add(model);
  pivot.rotation.y = ROTATE_Y;
  scene.add(pivot);

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 1000);
  const radius = size.length() / 2;
  const distance =
    (radius / Math.sin(THREE.MathUtils.degToRad(camera.fov / 2))) * 1.15;
  camera.position.set(1, 0.8, 1).normalize().multiplyScalar(distance);

  let shift = 0;
  const resize = () => {
    const { clientWidth: w, clientHeight: h } = el;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;

    camera.zoom = Math.min(1, camera.aspect / 0.95);
    camera.setViewOffset(w, h, -w * shift, h * 0.04, w, h);
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(el);
  resize();

  let target = 0;
  let prev = performance.now();
  let visible = true;
  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(el);
  renderer.setAnimationLoop((now) => {
    const step = Math.min((now - prev) / 1000, 0.1) / FALL_TIME;
    prev = now;
    let dirty = false;
    for (let i = 0; i < blocks; i++) {
      const goal = i < target ? 1 : 0;
      if (state[i] === goal) continue;
      state[i] = goal
        ? Math.min(1, state[i] + step)
        : Math.max(0, state[i] - step);
      dirty = true;
    }
    if (dirty) stateTex.needsUpdate = true;
    if (!visible) return;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  });

  return {
    model: pivot,
    camera,
    blocks,
    setCount: (n, instant = false) => {
      target = Math.max(0, Math.min(blocks, Math.round(n)));
      if (!instant) return;
      for (let i = 0; i < blocks; i++) state[i] = i < target ? 1 : 0;
      stateTex.needsUpdate = true;
    },
    setShift: (x) => {
      shift = x;
      resize();
    },
  };
}
