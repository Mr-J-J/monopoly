import { Entity } from "@/uni_modules/JJ-GSdk/js_sdk/model/entity";
import { Script } from "@/uni_modules/JJ-GSdk/js_sdk/base/script";
import { People } from "./people";

/**
 * 建筑基础类
 */
export class Building extends Entity implements Script {
    // 拥有者
    master: People | undefined;
    constructor(people: People) {
        super('block');
        this.vector3.height = 100;
        this.vector3.width = 100;
        this.master = people;
    }
    event(){}
    Start(){}
    Update(){}
}