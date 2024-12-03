import { Entity } from "@/uni_modules/JJ-GSdk/js_sdk/model/entity";
import { Material } from "@/uni_modules/JJ-GSdk/js_sdk/interface/resource";
import { Script } from "@/uni_modules/JJ-GSdk/js_sdk/base/script";

export class People extends Entity implements Script {
    constructor() {
        super('people');
        this.vector3.height = 100;
        this.vector3.width = 100;
    }
    Start(){}
    Update(){}
}