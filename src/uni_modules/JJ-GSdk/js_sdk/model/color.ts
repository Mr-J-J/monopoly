import { Entity } from "./entity";
import { Material } from "../interface/resource";
import { Vector3 } from "../interface/item";

export class Color extends Entity {
    constructor(color: string,x: number,y: number, width: number,height: number) {
        super('color');
        this.vector3 = new Vector3(x, y, 0, width, height,0);
        this.material = new Material(color,0,0,0,0,'color');
    }
}