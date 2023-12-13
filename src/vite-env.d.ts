/// <reference types="vite/client" />
// three.d.ts
// three.d.ts
declare module 'three/examples/jsm/objects/Water2.js' {
    import { Texture, Vector3, PlaneBufferGeometry } from 'three';
  
    export class Water {
      constructor(geometry: PlaneBufferGeometry, options: {
        textureWidth: number,
        textureHeight: number,
        waterNormals: Texture,
        alpha: number,
        sunDirection: Vector3,
        waterColor: number,
        distortionScale: number,
        fog: boolean
      });
  
      rotation: Vector3;
    }
  }