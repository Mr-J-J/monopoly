import { Material } from "./resource"
export interface Rect {
    bottom: number
    height: number
    left: number
    right: number
    top: number
    width: number
    x: number
    y: number
}
export interface ItemInterFace {
    name: string
    material: Material
}
export interface Vector3 {
    x: number
    y: number
    z: number
    width: number
    height: number
}
export class Vector3 implements Vector3 {
    x: number
    y: number
    z: number
    width: number
    height: number
    constructor(x: number, y: number, z: number, width: number, height: number) {
        this.x = x
        this.y = y
        this.z = z
        this.width = width
        this.height = height
    }
}