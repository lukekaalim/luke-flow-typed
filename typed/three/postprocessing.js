// @flow strict

/*::
declare module "three/addons/postprocessing/EffectComposer.js" {
  import type { WebGLRenderer } from 'three';

  declare export interface Pass {
  }

  declare export class EffectComposer {
    constructor(renderer: WebGLRenderer): EffectComposer;

    addPass(pass: Pass): void;
    setSize(width: number, height: number): void;

    render(): void;
  }
}


declare module "three/addons/postprocessing/RenderPass.js" {
  import type { Object3D, Camera } from 'three';
  import type { Pass } from 'three/addons/postprocessing/EffectComposer.js';

  declare export class RenderPass implements Pass {
    constructor(scene: Object3D, camera: Camera): RenderPass;
  }
}


declare module "three/addons/postprocessing/GlitchPass.js" {
  import type { Pass } from 'three/addons/postprocessing/EffectComposer.js';
  declare export class GlitchPass implements Pass {
    
  }
}

declare module "three/addons/postprocessing/ShaderPass.js" {
  import type { Pass } from 'three/addons/postprocessing/EffectComposer.js';
  declare export class ShaderPass implements Pass {

  }
}
*/