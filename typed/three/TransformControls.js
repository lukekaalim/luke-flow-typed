// @flow strict

/*::
declare module "three/addons/controls/TransformControls.js" {
  import type { Object3D as _Object3D, Camera } from 'three';
  declare var Object3D: Class<_Object3D>;

  declare export class TransformControls extends Object3D {
    constructor(camera: Camera, surface: HTMLElement): TransformControls;

    _gizmo: TransformControlsGizmo;

    attach(object: Object3D): this;
    mode: 'translate' | 'rotate' | 'scale';
    enabled: boolean;
    rotationSnap: number;
    setRotationSnap(rotationSnap: number): void;
    setMode('translate' | 'rotate' | 'scale'): void;
    getMode(): 'translate' | 'rotate' | 'scale';

    addEventListener('dragging-changed', (event: { value: boolean }) => mixed): void;
    removeEventListener('dragging-changed', (event: { value: boolean }) => mixed): void;
    
    addEventListener('change', () => mixed): void;
    removeEventListener('change', () => mixed): void;
  }
  declare export class TransformControlsGizmo extends Object3D {
    picker: {
      translate: Object3D,
      rotate: Object3D,
      scale: Object3D
    }
  }
}
*/