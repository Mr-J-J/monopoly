
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
}
export interface Origin {
    x: number
    y: number
}
export interface Vector3 {
    x: number
    y: number
    z: number
    width: number
    height: number
    rotation: number
    origin: Origin
}
export class Vector3 implements Vector3 {
    x: number
    y: number
    z: number
    width: number
    height: number
    rotation: number
    origin: Origin
    constructor(x: number, y: number, z: number, width: number, height: number, rotation: number = 0) {
        this.x = x
        this.y = y
        this.z = z
        this.width = width
        this.height = height
        this.rotation = rotation
        this.origin = { x: 0, y: 0 }
    }
}