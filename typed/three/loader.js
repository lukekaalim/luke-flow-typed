// @flow strict

/*::

declare module "three/examples/jsm/loaders/GLTFLoader.js" {
  import type { Scene } from 'three';

  declare export type GLTF = {
    scene: Scene,
  }

  declare export class GLTFLoader {
    load(url: string, onLoad: (data: GLTF) => mixed): void;
    loadAsync(url: string): Promise<GLTF>;
  }
}
declare module "three/addons/loaders/GLTFLoader.js" {
  import typeof { GLTFLoader as _GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

  declare export var GLTFLoader: _GLTFLoader;
}
*/