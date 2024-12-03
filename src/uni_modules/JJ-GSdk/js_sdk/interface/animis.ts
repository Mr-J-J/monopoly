import { Material } from "./resource"

export interface AnimisObj {
    [key: string]: AnimisOptions[]
}
export interface AnimisOptions {
    frames: Frame[]
}
export interface Frame {
    frame: Material
    duration: number
}