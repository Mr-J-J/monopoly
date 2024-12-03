import { Entity } from "./entity";
import { Material } from "../interface/resource";
import { Vector3 } from "../interface/item";
import { Data } from "../sdk/data";

export class Image extends Entity {
    constructor(material: Material,x: number,y: number, width: number,height: number, data: Data) {
        super('image');
        this.vector3 = new Vector3(x, y, 0, width, height);
        this.material = material;
    }
}