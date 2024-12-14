import { Block } from "../../baseModel/block";
import { Item } from "../../baseModel/item";
import { IPlayerRole, IPlayerStatus } from "../../interface/player";

/**
 * 玩家
 */
export class Player extends Item {
    name: string;
    // 素材
    Material: string;
    role: IPlayerRole;
    Status: IPlayerStatus = IPlayerStatus.stop;
    rectifyX: number = 0;
    rectifyY: number = -20;
    // 动画速度
    duration: number = 0.5;
    constructor(id: string,name:string, Material: string, role: IPlayerRole, query: UniNamespace.SelectorQuery) {
        super(id, query);
        this.Material = Material;
        this.role = role;
        this.name = name;
    }
    start() {
        this.Status = IPlayerStatus.start;
        this.info.Zindex = 2;
        this.duration = 0.5;
        let status = false;
        const whileId = setInterval(() => {
            if(this.Status == IPlayerStatus.stop) {
                this.info.scale = 1;
                clearInterval(whileId);
            }
            if (status) {
                this.info.scale = 1.1
            }else{
                this.info.scale = 0.9
            }
            status = !status;
        },this.duration * 1000)
    }
    stop() {
        this.Status = IPlayerStatus.stop;
        this.info.Zindex = 1;
    }
    go(block: Block) {
        this.Status = IPlayerStatus.run;
        this.duration = 0.2;
        const firstX = (this.info.x+block.info.left)/2;
        const firstY = this.info.y - 80;
        const {x, y} = block.getCenter();
        const lastX = x-this.info.width/2+this.rectifyX;
        const lastY = y-this.info.height/2+this.rectifyY;
        this.info.x = firstX;
        this.info.y = firstY;
        setTimeout(() => {
            this.info.x = lastX;
            this.info.y = lastY;
        },this.duration * 1000)
        this.Status = IPlayerStatus.stop;
    }
    move(block: Block) {
        const {x, y} = block.getCenter();
        this.info.x = x-this.info.width/2+this.rectifyX;
        this.info.y = y-this.info.height/2+this.rectifyY;
    }
}