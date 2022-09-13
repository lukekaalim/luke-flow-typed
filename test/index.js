// @flow strict
/*::
import type { Object3D } from "three";
*/

import {
  Mesh
} from 'three';
import {
  Sky
} from 'three/examples/jsm/objects/Sky.js';

const myMesh = new Mesh();
myMesh.visible;

let myObject/*: Object3D*/ = new Sky();