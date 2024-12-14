import { Block } from "../baseModel/block";
import { IPlayerRole, IPlayerStatus } from "../interface/player";
import { Player } from "../model/player/player";
import { AudioCol } from "./Audio";

/**
 * 玩家工厂
 * @param number 玩家数量
 * @param query 选择器
 */
export class PlayerFactory {
    query: UniNamespace.SelectorQuery
    PlayerList: Player[] = [];
    NowPlayer: Player = {} as Player;
    Audio: AudioCol;
    //皮肤列表
    MaterialList: string[] = [
        'https://btxgdqn.oliyuno.com/dafuweng/character/assassin_blue.png',
        'https://btxgdqn.oliyuno.com/dafuweng/character/barbarian_blue.png',
        'https://btxgdqn.oliyuno.com/dafuweng/character/broadswordman_blue.png',
        'https://btxgdqn.oliyuno.com/dafuweng/character/cowboy_green.png',
    ];
    constructor(number: number,audio: AudioCol,query: UniNamespace.SelectorQuery) {
        this.query = query;
        this.Audio = audio;
        for (let i = 0; i < number; i++) {
            this.PlayerList.push({} as Player);
            let role = IPlayerRole.Robot;
            if (i == 0) {
                role = IPlayerRole.Player;
            }
            this.PlayerList[i] = new Player('player'+i,'玩家'+i,this.MaterialList[i],role,this.Audio,query);
        }
    }
    setNowPlayer(player: Player) {
        this.NowPlayer = player;
        for (let i = 0; i < this.PlayerList.length; i++) {
            if(this.PlayerList[i] != player) {
                this.PlayerList[i].stop();
            }else{
                this.PlayerList[i].start();
            }
        }
    }
    /**
     * 全部玩家移动 
     */
    moveAll(block: Block) {
        for (let i = 0; i < this.PlayerList.length; i++) {
            this.PlayerList[i].move(block);
        }
    }
}