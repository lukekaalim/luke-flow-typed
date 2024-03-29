// @flow strict
/*::
declare module "three" {
  declare export class Vector2 {
    constructor(x: number, y: number): this;
    isVector2: boolean;
    height: number;
    width: number;
    x: number;
    y: number;

    set(x: number, y: number): this;
    add(v: Vector2): this;
    addScalar(s: number): this;
    addScaledVector(v: Vector2, s: number): this;
    multiply(v: Vector2): this;
    multiplyScalar(m: number): this;
    rotateAround(center: Vector2, angle: number): this;
    addVectors(a: Vector2, b: Vector2): this;
    angle(): number;
    ceil(): this;
    clamp(min: number, max: number): this;
    clampLength(min: number, max: number): this;
    clampScalar(min: number, max: number): this;
    clone(): Vector2;
    copy (v: Vector2): this;
    distanceTo(v: Vector2): this;
    distanceToManhattan(v: Vector2): number;
    distanceToSquared(v: Vector2): number;
    divide(v: Vector2): Vector2;
  }

  declare export class Vector3 {
    constructor(x?: number, y?: number, z?: number): this;

    x: number;
    y: number;
    z: number;

    set(x: number, y: number, z: number): this;
    setX(x: number): void;
    setY(y: number): void;
    setZ(z: number): void;
    copy(vector: this): this;
    fromArray(array: [number, number, number], offset: number): void;
    add(vector: this): this;
    addVectors(a: this, b: this): this;
    addScaledVector(vector: this, scale: number): this;
    addScalar(v: number): this;
    sub(vector: this): this;
    subVectors(a: this, b: this): void;
    multiplyScalar(scalar: number): this;
    divideScalar(scalar: number): void;
    negate(): this;
    dot(vector: this): void;
    lengthSq(): number;
    length(): number;
    lengthManhattan(): number;
    normalize(): this;
    distanceTo(vector: Vector3): number;
    distanceToSquared(vector: Vector3): number;
    setLength(length: number): void;
    cross(vector: Vector3): void;
    crossVectors(a: Vector3, b: Vector3): void;
    
    setFromMatrixPosition(matrix: Matrix4): this;
    setFromMatrixScale(matrix: Matrix4): this;

    clamp(min: number, max: number): void;
    clampScalar(min: number, max: number): void;
    clampLength(min: number, max: number): void;
    floor(): this;
    ceil(): this;
    round(): this;
    roundToZero(): this;
    applyMatrix3(matrix: Matrix3): this;
    applyMatrix4(matrix: Matrix4): this;
    projectOnPlane(planeNormal: Vector3): void;
    projectOnVector(vector: Vector3): void;
    divide(vector: Vector3): void;
    min(vector: Vector3): void;
    max(vector: Vector3): void;
    setComponent(index: 0 | 1 | 2, value: number): void;
    // TODO: which matrix?
    // transformDirection(matrix: Matrix): void;
    multiplyVectors(a: Vector3, b: Vector3): void;
    getCompoment(index: 0 | 1 | 2): number;
    applyAxisAngle(axis: Vector3, angle: number): this;
    lerp(vector: Vector3, alpha: number): this;
    lerpVectors(a: Vector3, b: Vector3, alpha: number): this;
    angleTo(vector: Vector3): number;
    setFromMatrixColumn(index: 0 | 1 | 2 | 3, matrix: Matrix4): void;
    // TODO: not sure what the return type really is here
    reflect(normal: Vector3): void;
    multiply(vector: Vector3): void;
    applyProjection(matrix: Matrix4): void;
    // TODO: does this actually use an Euler type?
    applyEuler(euler: Vector3): void;
    applyQuaternion(quaternion: Quaternion): this;
    project(camera: Camera): void;
    unproject(camera: Camera): void;
    equals(vector: Vector3): boolean;
    clone(): this;
    toArray(array: Array<number>, offset: number): void;
  }

  declare class Vector4 {}

  declare export class Quaternion {
    constructor(x?: number, y?: number, z?: number, w?: number): this;

    x: number;
    y: number;
    z: number;
    w: number;

    angleTo(q: Quaternion): number;
    clone(): Quaternion;
    conjugate(): Quaternion;
    copy(q: Quaternion): this;
    equals(v: Quaternion): bool;
    dot(v: Quaternion): number;
    fromArray(xyzw: [number, number, number, number], number): Quaternion;
    inverse(): Quaternion;
    length(): number;
    lengthSq(): number;
    normalize(): Quaternion;
    multiply(q: Quaternion): Quaternion;
    multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;
    slerpQuaternions(a: Quaternion, b: Quaternion, p: number): this;
    onChange(callback: Function): Quaternion;
    onChangeCallback(): Quaternion;
    premultiply(q: Quaternion): Quaternion;
    rotateTowards(q: Quaternion, step: number): Quaternion;
    slerp(q: Quaternion, t: number): Quaternion;
    set(x: number, y: number, z: number, w: number): Quaternion;
    setFromAxisAngle(axis: Vector3, angle: number): Quaternion;
    setFromEuler(euler: Euler): this;
    setFromRotationMatrix(m: Matrix4): Quaternion;
    setFromUnitVectors(from: Vector3, to: Vector3): Quaternion;
    toArray(array?: [], offset?: number): [number, number, number, number];
    identity(): this;
    random(): this;

    static slerp(
      start: Quaternion,
      end: Quaternion,
      target: Quaternion,
      t: number,
    ): Quaternion;

    static slerpFlat(
      dst: [number, number, number, number],
      dstOffset: number,
      src0: [number, number, number, number],
      srcOffset0: number,
      src1: [number, number, number, number],
      srcOffset1: number,
      t: number,
    ): Quaternion;
  }

  declare export class Matrix3 {
    copy(m: Matrix3): this;
  }

  declare export class Matrix4 {
    copy(m: Matrix4): this;
    setPosition(v: Vector3): this;
    lookAt(eye: Vector3, target: Vector3, up: Vector3): this;
    makeRotationFromQuaternion(q: Quaternion): void;
    identity(): this;
    invert(): this;
    multiply(m: Matrix4): this;

    compose( position : Vector3, quaternion : Quaternion, scale : Vector3 ): this;
  }

  declare export class Box3 {
    constructor(min?: Vector3, max?: Vector3 ): Box3;
    min: Vector3;
    max: Vector3;

    getCenter(target: Vector3): Vector3;
    getSize(target: Vector3): Vector3;
    setFromCenterAndSize(center: Vector3, size: Vector3 ): this;
    expandByScalar(scalar: number): this;
    expandByVector(vector: Vector3): this;

    applyMatrix4(matrix: Matrix4): this;
    translate(vector: Vector3): this;

    union(box: Box3): this;
    
    containsPoint(point: Vector3): boolean;
    intersectsBox(box: Box3): boolean;

    isEmpty(): boolean;
    makeEmpty(): this;

    clone(): this;
  }

  declare export class Box2 {
    constructor(min: Vector2, max: Vector2): Box2;

    getSize(target: Vector2): Vector2;
    getCenter(target: Vector2): Vector2;
  }

  declare export class Sphere {

  }

  declare export class GridHelper extends Object3D {

  }

  declare type MorphTarget = {
    name: string,
    vertices: Array<Vector3>,
  }

  declare type MorphNormal = {
    name: string,
    normals: Array<number>,
  }

  declare export class BufferGeometry {
    constructor(): this;
    colors: Array<Color>;
    faces: Array<Face3>;
    boundingBox: Box3 | null;
    boundingSphere: Sphere | null;
    faceVertexUvs: Array<Array<Array<Vector2>>>;
    id: number;
    isGeometry: boolean;
    lineDistances: Array<number>;
    morphTargets: Array<MorphTarget>;
    morphNormals: Array<MorphNormal>;
    name: string;
    skinWeights: Array<Vector4>;
    skinIndicies: Array<number>;
    uuid: string;
    vertices: Array<Vector3>;
    verticesNeedUpdate: boolean;
    elementsNeedUpdate: boolean;
    uvsNeedUpdate: boolean;
    normalsNeedUpdate: boolean;
    colorsNeedUpdate: boolean;
    groupsNeedUpdate: boolean;
    lineDistancesNeedUpdate: boolean;
    // TODO: add event dispatcher methods

    applyMatrix(matrix: Matrix4): void;
    center(): void;
    clone(): this;
    computeBoundingBox(): void;
    computeBoundingSphere(): void;
    computeFlatVertexNormals(): void;
    computeMorphNormals(): void;
    computeVertexNormals(areaWeighted: boolean): void;
    copy(geometry: BufferGeometry): void;
    dispose(): void;
    lookAt(vector: Vector3): void;
    merge(
      geometry: BufferGeometry,
      matrix: Matrix4,
      materialIndexOffset: number
    ): void;
    setAttribute(name: string, attribute: BufferAttribute): void;
    getAttribute(name: string): BufferAttribute;

    mergeMesh(mesh: Mesh): void;
    mergeVertices(): void;
    normalize(): void;
    rotateX(radians: number): this;
    rotateY(radians: number): this;
    rotateZ(radians: number): this;
    sortFacesByMaterialIndex(): void;
    scale(x: number, y: number, z: number): this;
    toJSON(): string;
    translate(x: number, y: number, z: number): this;
  }

  declare type HSL = {h: number, s: number, l: number,}

  declare export class Color {
    constructor(a: ?number | ?string, g: ?number, b: ?number): Color;
    r: number;
    g: number;
    b: number;

    set(value: Color | number | string): void;
    copy(c: Color): void;
    fromArray(array: [number, number, number], number): void;
    copyLinearToGamma(c: Color): void;
    convertGammaToLinear(): void;
    convertLinearToGamma(): void;
    setHex(hex: number): void;
    setStyle(style: string): void;
    getStyle(): string;
    setHSL(hue: number, saturation: number, lightness: number): void;
    getHSL(): HSL;
    offsetHSL(hue: number, saturation: number, lightness: number): void;
    add(color: Color): void;
    addColors(a: Color, b: Color): void;
    addScalar(scalar: number): void;
    multiply(color: Color): void;
    multiplyScalar(scalar: number): void;
    lerp(color: Color, alpha: number): void;
    equals(color: Color): boolean;
    clone(): void;
    toArray(array: ?[number, number, number], offset: ?number):
      [number, number, number];
  }

  declare export class Face3 {
    constructor(
      a: number,
      b: number,
      c: number,
      normal?: Vector3,
      color?: Color | Array<Color>,
      materialIndex?: number
    ): Face3;

    a: number;
    b: number;
    c: number;
    normal: Vector3;
    color: Color; // this might be nullable
    vertexColors: Array<Color>; // this might be nullable
    materialIndex: number;

    clone(): this;
    copy(face3: Face3): void;
  }

  declare export class InstancedMesh extends Mesh {
    
  }

  declare export class BufferAttribute {
    constructor(array: $TypedArray, itemSize: number, normalized?: boolean ): void;

    needsUpdate: boolean;
  }

  declare export class Points extends Object3D {
    geometry: BufferGeometry;
    material: Material;
  }
  declare export class Line extends Object3D {
    geometry: BufferGeometry;
    material: Material;
  }
  declare export class LineSegments extends Line {
  }
  declare export class LineLoop extends Line {
  }

  declare export class Mesh extends Object3D {
    constructor(
      geometry?: BufferGeometry,
      // Undocumented at time of writing: Mesh takes a Material or an array of
      // Materials. See: https://github.com/mrdoob/three.js/issues/10931
      material?: Material | Array<Material>
    ): this;

    drawMode: DrawMode;
    isMesh: boolean;
    geometry: BufferGeometry;
    // Undocumented at time of writing: material can be a Material or an array
    // of Materials. See: https://github.com/mrdoob/three.js/issues/10931
    material: Material | Array<Material>;
    morphTargetInfluences: Array<number>;
    morphTargetDictionary: {[string]: number};

    setDrawMode(): void;
    updateMorphTargets(): void;
  }

  declare export class UVMapping {

  }

  declare export class ImageUtils {
    static loadTexture: (path: string, mapping: typeof UVMapping) => Texture;
  }

  declare class Renderer { }

  declare export class Group extends Object3D {
    constructor(): this;

    type: 'Group';
  }

  declare export class Fog {
    constructor(color: number, near: number, far: number): this;

    name: string;
    color: Color;
    near: number;
    far: number;

    clone(): Fog;
    toJSON(): string;
  }

  declare export class Scene extends Object3D {
    constructor(): this;

    fog: ?Fog;
    overrideMaterial: ?Material;
    autoUpdate: bool;
    background: Color | Texture | WebGLRenderTarget | null;

    toJSON(): string;
  }

  declare function $npm$three$OnRenderCallback(
    renderer: Renderer,
    scene: Scene,
    // TODO: Enable again once https://github.com/facebook/flow/issues/3888 is
    // addressed.
    // camera: Camera,
    geometry: BufferGeometry,
    // TODO: Enable again once https://github.com/facebook/flow/issues/3888 is
    // addressed.
    // material: Material,
    group: number // this is a guess
  ): void;

  declare class Layers {}

  declare export class Object3D {
    // castShadow is undefined in AmbientLight.
    type: string,

    castShadow: ?boolean;
    children: Array<Object3D>;
    frustrumCulled: boolean;
    id: number;
    layers: Layers;
    matrix: Matrix4;
    matrixAutoUpdate: boolean;
    matrixWorld: Matrix4;
    modelViewMatrix: Matrix4;
    name: string;
    normalMatrix: Matrix3;
    onAfterCallback: typeof $npm$three$OnRenderCallback;
    onBeforeCallback: typeof $npm$three$OnRenderCallback;
    parent: Object3D;
    +position: Vector3;
    +quaternion: Quaternion;
    receiveShadow: boolean;
    renderOrder: number;
    rotation: Vector3;
    scale: Vector3;
    up: Vector3;
    userData: mixed;
    uuid: string;
    visible: boolean;

    static DefaultUp: Vector3;
    static DefaultMatrixAutoUpdate: Vector3;
    // TODO: Add event dispatcher methods

    add(...os: Array<Object3D>): this;
    removeFromParent(): this;
    applyMatrix(matrix: Matrix4): void;
    clone(recursive: boolean): Object3D;
    getObjectById(id: number): Object3D;
    getObjectByName(name: string): Object3D;
    getObjectByProperty(name: string, value: mixed): Object3D;
    getWorldPosition(optionalTarget: Vector3): Vector3;
    getWorldOrientation(optionalTarget: Quaternion): Quaternion;
    getWorldRotation(optionalTarget: Euler): Euler;
    getWorldDirection(optionalTarget: Vector3): Vector3;
    localToWorld(vector: Vector3): Vector3;
    lookAt(vector: Vector3 | number, y?: number, z?: number): void;
    // TODO: Find out if the array type is based on the specific Object3D
    // subtype.
    raycast(raycaster: Raycaster, intersects: Array<IntersectionObject>): Array<IntersectionObject>;
    // Expressed this way to ensure at least one object to remove.
    remove(object: Object3D, ...otherObjects: Array<Object3D>): void;
    rotateOnAxis(axis: Vector3, angle: number): void;
    rotateX(rad: number): void;
    rotateY(rad: number): void;
    rotateZ(rad: number): void;
    setRotationFromAxisAngle(axis: Vector3, angleInRadians: number): void;
    setRotationFromEuler(euler: Euler): void;
    setRotationFromMatrix(matrix: Matrix4): void;
    setRotationFromQuaternion(quaternion: Quaternion): void;
    // TODO: Docs say this takes a Quaternion - should verify because this looks
    // fishy.
    toJSON(quaternion: Quaternion): string;
    translateOnAxis(axis: Vector3, distance: number): void;
    translateX(distance: number): void;
    translateY(distance: number): void;
    translateZ(distance: number): void;
    traverse(callback: (obj: Object3D) => void): void;
    traverseVisible(callback: (obj: Object3D) => void): void;
    traverseAncestors(callback: (obj: Object3D) => void): void;
    updateMatrix(): void;
    updateMatrixWorld(force: boolean): void;
    worldToLocal(vector: Vector3): Vector3;
  }

  declare export class Camera extends Object3D {
    constructor(): this;
    isCamera: boolean;
    layers: Layers;
    matrixWorldInverse: Matrix4;
    projectionMatrix: Matrix4;
    clone(): this;
    copy(source: Camera): void;
    getWorldDirection(target?: Vector3): Vector3;
  }

  declare export class OrthographicCamera extends Camera {
    constructor(
      left?: number,
      right?: number,
      top?: number,
      bottom?: number,
      far?: number,
      near?: number
    ): this;

    bottom: number;
    far: number;
    isOrthographicCamera: boolean;
    left: number;
    near: number;
    right: number;
    top: number;
    view: ?mixed;
    zoom: number;

    setViewOffset(
      fullWidth: number,
      fullHeight: number,
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
    clearViewOffset(): void;
    updateProjectionMatrix(): void;
    toJSON(): string;
  }

  declare export class Euler {
    copy(e: Euler): this;
    constructor(x?: number, y?: number, z?: number, order?: string): this;
    order: string;
    x: number;
    y: number;
    z: number,
    setFromQuaternion(quaternion: Quaternion): this;
    set(x: number, y: number, z: number): this;
  }

  declare export class SpriteMaterial extends Material {
    constructor(options?: {
      color?: Color;
      alphaMap?: ?Texture;
      map?: ?Texture;
      rotation?: number;
      sizeAttenuation?: boolean;
    }): this;

    color: Color;
    alphaMap: Texture;
    map: Texture;
    rotation: number;
    sizeAttenuation: boolean;
  }

  declare export class Sprite extends Object3D {
    material: Material;
    center: Vector2;
  }

  declare export class PerspectiveCamera extends Camera {
    constructor(fov?: number, aspect?: number, near?: number, far?: number): this;

    aspect: number;
    far: number;
    filmGauge: number;
    focus: number;
    fov: number;
    isPerspectiveCamera: boolean;
    near: number;
    view: ?mixed;
    zoom: number;

    clearViewOffset(): void;
    getEffectiveFOV(): number;
    getFilmHeight(): number;
    getFilmWidth(): number;
    getFocalLength(): number;
    setViewOffset(
      fullWidth: number,
      fullHeight: number,
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
    updateProjectionMatrix(): void;
    toJSON(): string;
  }

  declare export class Material {
    constructor(): this;

    alphaTest: number,
    // looks like an enum
    // blendDst:
    // blendDstAlpha:
    // blendEquation:
    // blendEquationAlpha
    // blending
    // blendSrc
    // blendSrcAlpha
    // clipIntersection
    clippingShadows: boolean;
    colorWrite: boolean;
    // depthFunc
    depthWrite: boolean;
    fog: boolean;
    id: number;
    isMaterial: boolean;
    lights: boolean;
    name: ?string;
    opacity: number;
    overdraw: number;
    // polygonOffset
    polygonOffsetFactor: number;
    polygonOffsetUnits: number;
    // precision
    premultipliedAlpha: boolean;
    // shaded
    // side
    transparent: boolean;
    type: 'Material';
    uuid: string;
    // vertexColors
    visible: boolean;


    // TODO: Add EventDispatcher methods

    clone(): this;
    copy(m: Material): void;
    dispose(): void;
    setValues(vs: mixed): void;
    toJSON(meta: mixed): string;
    update(): void;
  }

  declare type MeshPhongMaterialCtorArgs = {
    alphaMap?: Texture,
    aoMap?: Texture,
    aoMapIntensity?: number,
    bumpMap?: Texture,
    bumpScale?: number,
    color?: number,
    combine?: CombineStrategy,
    displacementMap?: Texture,
    displacementScale?: number,
    displacementBias?: number,
    emissive?: Color,
    emissiveMap?: Texture,
    emissiveIntensity?: number,
    // Docs aren't clear what type envMap should be.
    envMap?: Texture,
    // isMeshPhongMaterial,
    lightMap?: Texture,
    lightMapIntensity?: number,
    map?: Texture,
    morphNormals?: bool,
    normalMap?: Texture,
    morphTargets?: bool,
    normalScale?: Vector2,
    reflectivity?: number,
    refractionRatio?: number,
    shininess?: number,
    skinning?: bool,
    // TODO: Use opaque type alias here.
    specular?: number,
    specularMap?: Texture,
    wireframe?: bool,
    wireframeLinecap?: WireframeLineCap,
    wireframeLinejoin?: WireframeLineJoin,
    wireframeLineWidth?: number,
  }

  declare export class MeshPhongMaterial extends Material {
    constructor(args?: MeshPhongMaterialCtorArgs): this;

    alphaMap: Texture;
    aoMap: Texture;
    aoMapIntensity: number;
    bumpMap: Texture;
    bumpScale: number;
    color: number;
    combine: CombineStrategy;
    displacementMap: Texture;
    displacementScale: number;
    displacementBias: number;
    emissive: Color;
    emissiveMap: Texture;
    emissiveIntensity: number;
    // Docs aren't clear what type envMap should be.
    envMap: Texture;
    // isMeshPhongMaterial,
    lightMap: Texture;
    lightMapIntensity: number;
    map: Texture;
    morphNormals: bool;
    normalMap: Texture;
    morphTargets: bool;
    normalScale: Vector2;
    reflectivity: number;
    refractionRatio: number;
    shininess: number;
    skinning: bool;
    // TODO: Use opaque type alias here.
    specular: number;
    specularMap: Texture;
    wireframe: bool;
    wireframeLinecap: WireframeLineCap;
    wireframeLinejoin: WireframeLineJoin;
    wireframeLineWidth: number;
  }

  declare export class MultiMaterial extends Material {

  }

  // constants

  declare var TrianglesDrawMode: 0;
  declare var TriangleStripDrawMode: 1;
  declare var TriangleFanDrawMode: 2;

  declare type DrawMode = 0 | 1 | 2;
  // TODO: find out why the below won't work.
  // declare type DrawMode =
  //   TrianglesDrawMode |
  //   TriangleStripDrawmMode |
  //   TriangleFanDrawMode

  declare var MultiplyOperation: 0;
  declare var MixOperation: 1;
  declare var AddOperation: 2;

  declare type CombineStrategy = 0 | 1 | 2
    // MultiplyOperation |
    // MixOperation |
    // AddOperation

  declare type WireframeLineCap =
    'butt' |
    'round' |
    'square'

  declare type WireframeLineJoin =
    'round' |
    'bevel' |
    'miter'

  // end constants

  // The Material base class doesn't use these, but the subclasses can.
  declare type MaterialSubclassCtorArgs = {

  }

  // TODO: Make a MaterialCtorArgs for Material subclasses to use.
  declare type MeshBasicMaterialCtorArgs = {
    alphaMap?: ?Texture,
    aoMap?: ?Texture,
    aoMapIntensity?: number,
    color?: Color | string,
    combine?: CombineStrategy,
    isBasicMeshMaterial?: bool,
    envMap?: ?Texture,
    lightMap?: ?Texture,
    lights?: bool,
    map?: ?Texture,
    morphTargets?: bool,
    refractionRatio?: number,
    skinning?: false,
    specularMap?: ?Texture,
    wireframe?: bool,
    wireframeLineCap?: WireframeLineCap,
    wireframeLineJoin?: WireframeLineJoin,
  }

  declare export class PointsMaterial extends Material {
    constructor({
      color?: string | number,
      vertexColors?: boolean,
      transparent?: boolean,
    }): PointsMaterial,
    color: string | number | Color;
  }

  declare export class MeshBasicMaterial extends Material {
    constructor(args?: MeshBasicMaterialCtorArgs): this;
    alphaMap: ?Texture;
    aoMap: ?Texture;
    aoMapIntensity: number;
    color: Color;
    combine: CombineStrategy;
    isBasicMeshMaterial: bool;
    envMap: ?Texture;
    lightMap: ?Texture;
    lights: bool;
    map: ?Texture;
    morphTargets: bool;
    refractionRatio: number;
    skinning: false;
    specularMap: ?Texture;
    wireframe: bool;
    wireframeLineCap: WireframeLineCap;
    wireframeLineJoin: WireframeLineJoin;
  }

  declare export class MeshStandardMaterial extends Material {
    constructor({ color?: Color, map?: Texture }): MeshStandardMaterial;
  }

  declare type RepeatWrappingEnum = number
  // In case we really need this, see:
  // https://stackoverflow.com/questions/29133137/three-js-looking-for-an-alternative-to-meshfacematerial
  // declare class MeshFaceMaterial extends Material {
  //   constructor(): this;
  // }

  declare type BoxGeometryParams = {
    width: number;
    height: number;
    depth: number;
    widthSegments: number;
    heightSegments: number;
    depthSegments: number;
  }
  declare export class BoxGeometry extends BufferGeometry {
    constructor(
      width: number,
      height: number,
      depth: number,
      widthSegments?: number,
      heightSegments?: number,
      depthSegments?: number
    ): this;

    parameters: BoxGeometryParams;
  }
  declare export class PlaneGeometry extends BufferGeometry {
    constructor(width: number, height: number, widthSegments?: number, heightSegments?: number): this;
  }

  declare export class LightShadow {
    constructor(camera: Camera): this;

    camera: Camera;
    bias: number;
    map: Texture;
    mapSize: Vector2;
    matrix: Matrix4;
    radius: number;

    copy: (source: LightShadow) => void;
    clone: () => LightShadow;
    toJSON: () => string;
  }

  declare export class Light extends Object3D {
    constructor(color?: number, intensity?: number): this;

    color: Color;
    intensity: number;
    isLight: bool;

    copy: (source: Light) => void;
    toJSON: () => string;
  }

  declare export class AmbientLight extends Light {
    constructor(
      color?: number,
      intensity?: number,
    ): this;

    isAmbientLight: bool;
  }
  declare export class DirectionalLight extends Light {
    constructor(
      color?: number,
      intensity?: number,
    ): this;
  }
  declare export class HemisphereLight extends Light {
    constructor(
      color?: number,
      intensity?: number,
    ): this;
  }


  declare export class PointLight extends Light {
    constructor(
      color?: number,
      intensity?: number,
      distance?: number,
      decay?: number
    ): this;

    decay: number;
    distance: number;
    isPointLight: bool;
    power: number;
    shadow: mixed;
    // This likely intends to copy from a PointLight but Flow can't enforce
    // that.
    copy: (source: Light) => void;

  }
  declare class LoadingManager {}

  declare export class Texture {
    dispose(): void;
    encoding: string;
    minFilter: number;
    magFilter: number;
    offset: Vector2;
    flipY: boolean;
    flipX: boolean;
  }

  declare export class CubeTexture {}

  declare function TextureLoaderOnLoadCallback(texture: Texture): void;
  declare function TextureLoaderOnProgressCallback(request: XMLHttpRequest): void;
  declare function TextureLoaderOnErrorCallback(error: Error): void;

  declare export class TextureLoader {
    constructor(): this;
    constructor(loadingManager: LoadingManager): this;

    crossOrigin: ?string;
    manager: LoadingManager;
    path: ?string;
    withCredentials: ?boolean;

    load(
      url: string,
      onLoad?: typeof TextureLoaderOnLoadCallback,
      onProgress?: typeof TextureLoaderOnProgressCallback,
      onError?: typeof TextureLoaderOnErrorCallback,
    ): Texture;
    loadAsync(url: string): Promise<Texture>;
    setCrossOrigin(value: string): void;
    setWithCredentials(value: boolean): void;
  }



  declare class WebGLRenderTarget {}

  declare export class WebGLRenderer {
    constructor(...args: Array<mixed>): this;
    render(
      scene: Object3D,
      camera: Camera,
      renderTarget?: ?WebGLRenderTarget,
      forceClear?: ?boolean
    ): void;
    dispose(): null;
    clear(color?: boolean, depth?: boolean, stencil?: boolean): null;
    setSize(width: number, height: number, updateStyle: boolean): void;
    domElement: Element;
    shadowMap: {
        type: string,
        enabled: boolean,
    };
    outputEncoding: string;
  }

  // declare var Geometry: Geometry
  // declare var MeshPhoneMaterial: MeshPhongMaterial
  // declare var MultiMaterial: MultiMaterial
  // declare var MeshBasicMaterial: MeshBasicMaterial
  declare export var RepeatWrapping: RepeatWrappingEnum

  declare export class Raycaster {
    constructor(origin?: Vector3, direction?: Vector3, near?: number, far?: number): Raycaster;
    setFromCamera(position: Vector2, camera: Camera): void;
    intersectObjects(objects: $ReadOnlyArray<Object3D>, recursive?: boolean): IntersectionObject[];
    ray: Ray;
  }
  declare export class Ray {
    constructor(origin: Vector3, direction: Vector3): Ray;
    origin: Vector3;
    direction: Vector3;
  }

  // | |======================| |
  //             Geometry  
  // | |======================| |

  declare export class EdgesGeometry extends BufferGeometry {
    constructor(geometry: BufferGeometry): EdgesGeometry;
  }
  declare export class SphereGeometry extends BufferGeometry {
    constructor(size?: number): EdgesGeometry;
  }
  declare export class ConeGeometry extends BufferGeometry {
    constructor(radius?: number, height?: number, radialSegments?: number): EdgesGeometry;
  }

  // | |======================| |
  //             Material  
  // | |======================| |

  declare export type LineMaterialArgs = {
    color?: Color | string,
  }

  declare export class LineBasicMaterial extends Material {
    constructor(args?: LineMaterialArgs): LineBasicMaterial;
    color?: Color | string;
  }

  // | |======================| |
  //             Bones  
  // | |======================| |

  declare export class Bone extends Object3D {
    // TODO
  }
  declare export class Skeleton extends Object3D {
    // TODO
  }

  // | |======================| |
  //           Meshes  
  // | |======================| |

  declare export class LOD extends Object3D {
    // TODO
  }

  // | |======================| |
  //          Shadow Map  
  // | |======================| |

  declare export var PCFSoftShadowMap: string;

  // | |======================| |
  //        Texture Constants
  // | |======================| |

  declare export var sRGBEncoding: string;
  declare export var NearestFilter: string;
  declare export var LinearFilter: number;
  declare export var NearestMipmapNearestFilter: number;

  // | |======================| |
  //        Math 
  // | |======================| |

  declare export class CubicBezierCurve3 {
    constructor(Vector3, Vector3, Vector3, Vector3): CubicBezierCurve3;
  }
  // | |======================| |
  //        Blending Modes 
  // | |======================| |

  declare export var AdditiveBlending: string;

  // | |======================| |
  //            Helpers
  // | |======================| |

  declare export class Box3Helper extends Object3D {
    constructor(box?: Box3, color?: string | Color): Box3Helper;
    dispose(): void;
  }
  declare export class BoxHelper extends Object3D {
    constructor(object: Object3D, color?: string | Color): BoxHelper;
    dispose(): void;
  }
  declare export class AxesHelper extends Object3D {
    constructor(size?: number): Box3Helper;
    dispose(): void;
  }
  declare export class CameraHelper extends Object3D {
    constructor(camera?: Camera): Box3Helper;
  }

  // | |======================| |
  //            Interfaces
  // | |======================| |

  declare export type IntersectionObject = {
    point: Vector3,
    object: Object3D,
    distance: number,
  }
}

*/