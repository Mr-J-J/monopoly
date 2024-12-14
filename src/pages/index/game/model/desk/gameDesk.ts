import { Desk } from "../../baseModel/deskModel";
import { AudioCol } from "../../controller/Audio";
import { PlayerFactory } from "../../controller/PlayerFactory";
import { SieveCup } from "../SieveCup";

export class GameDesk extends Desk {
    Material: string = 'https://btxgdqn.oliyuno.com/dafuweng/dice/dice_box.png';
    // 筛盅
    SieveCup: SieveCup;
    PlayerFactory: PlayerFactory;
    Audio: AudioCol;
    constructor(id:string,PlayerFactory: PlayerFactory,audio: AudioCol,query: UniNamespace.SelectorQuery) {
        super(id,query);
        this.Audio = audio;
        this.PlayerFactory = PlayerFactory;
        this.SieveCup = new SieveCup('sieveCup',this.Audio,this.PlayerFactory,query);
    }
    //投筛盅
    async throwSieveCup(){
        //获取1-6的随机数
        let randomNum = Math.floor(Math.random() * 6) + 1;
        await this.SieveCup.run(randomNum);
        return randomNum;
    }
}