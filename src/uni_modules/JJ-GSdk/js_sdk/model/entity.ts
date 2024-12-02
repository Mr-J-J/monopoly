import { Vector3 } from "../interface/item";
import { Material } from "../interface/resource";
import { Item } from "../base/item";
import { Script } from "../base/script";

export class Entity extends Item implements Script {
    vector3: Vector3 = new Vector3(0,0,0,0,0);
    show: boolean = true;
    constructor(name: string,material: Material) {
        super(name,material);
    }
    Start(){}
    Update(){}
}