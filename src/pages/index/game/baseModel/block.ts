import { Entity } from "@/uni_modules/JJ-GSdk/js_sdk/model/entity";
import { Script } from "@/uni_modules/JJ-GSdk/js_sdk/base/script";
import { Land } from "./land";
import { People } from "./people"
import { Building } from "./building";
import { BlockStatus, StatusMaterial } from "@/pages/index/game/interface/block";
/**
 * 方块基础类
 */
export class Block extends Entity implements Script {
    // 状态是否被猜中
    status: BlockStatus = BlockStatus.off;
    // 状态材质
    status_materials: StatusMaterial = {} as StatusMaterial;
    // 子对象|对应的地块
    child_land: Land = {} as Land;
    // 子建筑
    child_build: Building = {} as Building;
    // 负载的人物|谁在上面
    loadeds: People[] | undefined;
    constructor() {
        super('block');
        this.vector3.height = 100;
        this.vector3.width = 100;
        this.vector3.origin.x = this.vector3.width / 2;
        this.vector3.origin.y = this.vector3.height / 2;

    }
    // 触发事件
    event(){}
    Start(){}
    Update(){}
}