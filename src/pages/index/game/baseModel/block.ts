import { Entity } from "@/uni_modules/JJ-GSdk/js_sdk/model/entity";
import { Script } from "@/uni_modules/JJ-GSdk/js_sdk/base/script";

export class Block extends Entity implements Script {
    constructor() {
        super('block');
        this.vector3.height = 100;
        this.vector3.width = 100;
    }
    Start(){}
    Update(){}
}