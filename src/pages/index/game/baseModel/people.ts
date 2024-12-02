import { Entity } from "@/uni_modules/JJ-GSdk/js_sdk/model/entity";
import { Material } from "@/uni_modules/JJ-GSdk/js_sdk/interface/resource";
import { Vector3 } from "@/uni_modules/JJ-GSdk/js_sdk/interface/item";
import { Script } from "@/uni_modules/JJ-GSdk/js_sdk/base/script";

export class People extends Entity implements Script {
    constructor(material: Material) {
        super('people',material);
        this.vector3.height = 100;
        this.vector3.width = 100;
    }
    Start(){}
    Update(){}
}