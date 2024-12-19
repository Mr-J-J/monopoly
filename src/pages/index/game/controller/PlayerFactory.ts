import { Block } from "../baseModel/block";
import { IPlayerRole, IPlayerSkin, IPlayerStatus } from "../interface/player";
import { Player } from "../model/player/player";
import { Robot } from "../model/player/robot";
import { AudioCol } from "./Audio";

/**
 * 玩家工厂
 * @param number 玩家数量
 * @param query 选择器
 */
export class PlayerFactory {
    query: UniNamespace.SelectorQuery
    PlayerList: Player[] = [];
    NowPlayer: Player|Robot = {} as Player;
    Audio: AudioCol;
    //皮肤列表
    SkinList: IPlayerSkin[] = [{
        Material: 'https://btxgdqn.oliyuno.com/dafuweng/character/assassin_blue.png',
        ScoreboardBg: 'https://btxgdqn.oliyuno.com/dafuweng/matching_list/blue_box.png',
        ScoreBoardBorder: 'https://btxgdqn.oliyuno.com/dafuweng/matching_list/blue_shining.png'
      },{
        Material: 'https://btxgdqn.oliyuno.com/dafuweng/character/fox_yellow.png',
        ScoreboardBg: 'https://btxgdqn.oliyuno.com/dafuweng/matching_list/green_box.png',
        ScoreBoardBorder: 'https://btxgdqn.oliyuno.com/dafuweng/matching_list/green_shining.png'
      },{
        Material: 'https://btxgdqn.oliyuno.com/dafuweng/character/broadswordman_blue.png',
        ScoreboardBg: 'https://btxgdqn.oliyuno.com/dafuweng/matching_list/red_box.png',
        ScoreBoardBorder: 'https://btxgdqn.oliyuno.com/dafuweng/matching_list/red_shining.png'
      }
    ];
    //队伍
    TeamList: string[] = ['red','blue','green'];
    constructor(number: number,audio: AudioCol,query: UniNamespace.SelectorQuery) {
        this.query = query;
        this.Audio = audio;
        for (let i = 0; i < number; i++) {
            this.PlayerList.push({} as Player);
            let role = IPlayerRole.Robot;
            if (i == 0) {
                role = IPlayerRole.Player;
            }
            if(i ==  0){
                this.PlayerList[i] = new Player(i,'玩家'+(i+1),this.SkinList[i],role,this.Audio,query);
            }else{
                this.PlayerList[i] = new Robot(i,'玩家'+(i+1),this.SkinList[i],role,this.Audio,query);
            }
        }
    }
    /**
     * 开启定时监听帮机器人致筛子
     */
    robotRollDice(fun: Function) {
        return setInterval(() => {
            if (this.NowPlayer.role == IPlayerRole.Robot) {
                fun();
            }
        }, 5000)
    }
    /**
     * 设置当前玩家
     * @param player 
     */
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
    /**
     * 获取下一个玩家
     */
    getNextPlayer(): Player {
        let index = this.PlayerList.indexOf(this.NowPlayer);
        if (index == this.PlayerList.length - 1) {
            return this.PlayerList[0];
        } else {
            return this.PlayerList[index + 1];
        }
    }
}