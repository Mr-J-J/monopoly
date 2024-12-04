import { Entity } from "@/uni_modules/JJ-GSdk/js_sdk/model/entity";
import { Script } from "@/uni_modules/JJ-GSdk/js_sdk/base/script";
import { People } from "./people";

/**
 * 地皮基础类
 */
export class Land extends Entity implements Script {
    // 拥有者
    master: People | undefined;
    constructor() {
        super('block');
        this.vector3.height = 100;
        this.vector3.width = 100;
    }
    event(){}
    Start(){}
    Update(){}
}