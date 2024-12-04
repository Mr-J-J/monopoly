import { Script } from "@/uni_modules/JJ-GSdk/js_sdk/base/script";
import { Block } from "@/pages/index/game/baseModel/block";


/**
 * 小游戏方块类
 */
export class LiteGame extends Block implements Script {
    constructor() {
        super();
    }
    // 触发事件
    event(){}
    Start(){
        this.vector3.x = 10;
        this.vector3.y = 30;
        this.material = this.data.resource.images['little_game_button']
        this.status_materials.on = this.data.resource.images['little_game_button']
        this.status_materials.off = this.data.resource.images['little_game_button']
    }
    Update(){
        this.vector3.rotation += 1
    }
}