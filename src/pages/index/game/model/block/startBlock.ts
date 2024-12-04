import { Script } from "@/uni_modules/JJ-GSdk/js_sdk/base/script";
import { Block } from "@/pages/index/game/baseModel/block";


/**
 * 开始方块类
 */
export class StartBlock extends Block implements Script {
    constructor() {
        super();
    }
    // 触发事件
    event(){}
    Start(){
        this.vector3.x = 100;
        this.vector3.y = 30;
        this.material = this.data.resource.images['starting_point']
    }
    Update(){

    }
}