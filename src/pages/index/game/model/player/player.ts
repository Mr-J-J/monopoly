import { Block } from "../../baseModel/block";
import { Item } from "../../baseModel/item";
import { AudioCol } from "../../controller/Audio";
import { IBaseModel } from "../../interface/baseModel";
import { IBlockStatus } from "../../interface/block";
import { IPlayerRole, IPlayerSkin, IPlayerStatus } from "../../interface/player";
import { sleep } from "../../tools/tools";
import { PlayerScreen } from "../screen/screen";

/**
 * 玩家
 */
export class Player extends Item {
    name: string;
    avatar: string;
    money: number = 2800;
    // 素材
    Material: string;
    SkinInfo: IPlayerSkin;
    role: IPlayerRole;
    Status: IPlayerStatus = IPlayerStatus.stop;
    Audio: AudioCol;
    //是否正向
    isForward: boolean = true;
    // 矫正位置
    rectifyX: number = 0;
    rectifyY: number = -20;
    // 动画速度
    duration: number = 0.5;
    // 在什么方块上
    block: Block = {} as Block;
    // 计分板
    screen: PlayerScreen[] = [];
    constructor(id: number,name:string, SkinInfo: IPlayerSkin, role: IPlayerRole, audio:AudioCol,query: UniNamespace.SelectorQuery) {
        super('player'+id, query);
        this.Audio = audio;
        this.Material = SkinInfo.Material;
        this.avatar = SkinInfo.Material;
        this.SkinInfo = SkinInfo;
        this.role = role;
        this.name = name;
        for(let i = 0; i < 5; i++) {
            this.screen.push(new PlayerScreen('screen'+i+this.name,query));
        }
    }
    start() {
        this.Status = IPlayerStatus.start;
        this.info.Zindex = 2;
        this.duration = 0.5;
        let status = false;
        const whileId = setInterval(() => {
            if(this.Status != IPlayerStatus.start) {
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
    async go(block: Block) {
        this.Status = IPlayerStatus.run;
        sleep(500)
        this.Audio.playMultipleTimes('/static/game/music/jump.mp3', 1, 0.5);
        this.duration = 0.2;
        const firstX = (this.info.x+block.info.left)/2;
        const firstY = this.info.y - 80;
        const {x, y} = block.getCenter();
        const lastX = x-this.info.width/2+this.rectifyX;
        const lastY = y-this.info.height/2+this.rectifyY;
        this.info.x = firstX;
        this.info.y = firstY;
        // 修改脚下的方块状态
        this.block.changeStatus(IBlockStatus.off);
        await sleep(this.duration * 1000);
        this.info.x = lastX;
        this.info.y = lastY;
        await sleep(this.duration * 1000);
        this.block = block;
        this.Status = IPlayerStatus.stop;
        this.block.changeStatus(IBlockStatus.on);
        this.duration = 0.5;
    }
    move(block: Block) {
        const {x, y} = block.getCenter();
        this.info.x = x-this.info.width/2+this.rectifyX;
        this.info.y = y-this.info.height/2+this.rectifyY;
        this.block = block;
    }
    async runEvent() {
        this.Status = IPlayerStatus.eventing;
        await this.block.event();
    }
    /**
     * 花钱
     */
    async pay(money: number) {
        
    }
    /**
     * 购买建筑
     * buildPop
     */
    buyBuild(){
        this.Status = IPlayerStatus.stop;
    }
}