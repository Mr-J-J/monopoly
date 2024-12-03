import { Vector3 } from "../interface/item";
import { Material } from "../interface/resource";
import { Item } from "../base/item";
import { Script } from "../base/script";
import { Data } from "../sdk/data";
import { Anims } from "../sdk/anims";

export class Entity extends Item implements Script {
    vector3: Vector3 = new Vector3(0,0,0,0,0);
    material: Material = {} as Material;
    data: Data = {} as Data;
    show: boolean = true;
    anims: Anims = {} as Anims;
    constructor(name: string) {
        super(name);
    }
    Start(){}
    Update(){}
}