import { Item } from "../baseModel/item";
import { AudioCol } from "../controller/Audio";
import { PlayerFactory } from "../controller/PlayerFactory";
import { SieveCupType } from "../interface/sieveCup";
import { sleep } from "../tools/tools";

/**
 * 筛盅
 */
export class SieveCup extends Item {
    Material: string = 'https://btxgdqn.oliyuno.com/dafuweng/dice/one.png';
    aimationList : string[] = [
        'https://btxgdqn.oliyuno.com/dafuweng/dice/dice_one.png',
        'https://btxgdqn.oliyuno.com/dafuweng/dice/dice_six.png',
        'https://btxgdqn.oliyuno.com/dafuweng/dice/dice_four.png',
        'https://btxgdqn.oliyuno.com/dafuweng/dice/dice_five.png',
        'https://btxgdqn.oliyuno.com/dafuweng/dice/dice_three.png',
        'https://btxgdqn.oliyuno.com/dafuweng/dice/dice_two.png',
    ];
    numberList: string[] = [
        'https://btxgdqn.oliyuno.com/dafuweng/dice/one.png',
        'https://btxgdqn.oliyuno.com/dafuweng/dice/two.png',
        'https://btxgdqn.oliyuno.com/dafuweng/dice/three.png',
        'https://btxgdqn.oliyuno.com/dafuweng/dice/four.png',
        'https://btxgdqn.oliyuno.com/dafuweng/dice/five.png',
        'https://btxgdqn.oliyuno.com/dafuweng/dice/six.png'
    ];
    number: number = 1;
    PlayerFactory: PlayerFactory;
    Status: SieveCupType = SieveCupType.stop;
    duration: number = 0.5;
    Audio: AudioCol;
    constructor(id: string, audio: AudioCol, PlayerFactory: PlayerFactory,query: UniNamespace.SelectorQuery) {
        super(id, query);
        this.Audio = audio;
        this.PlayerFactory = PlayerFactory;
    }
    start() {
        this.Status = SieveCupType.start;
        this.duration = 0.5;
        let status = false;
        const whileId = setInterval(() => {
            if (this.Status != SieveCupType.start) {
                this.info.scale = 1;
                clearInterval(whileId);
            }
            if (status) {
                this.info.scale = 1.1
            } else {
                this.info.scale = 0.9
            }
            status = !status;
        }, this.duration * 1000)
    }
    stop() {
        this.Status = SieveCupType.stop;
        this.duration = 0.5;
        this.info.scale = 1;
    }
    async run(number: number) {
        this.Status = SieveCupType.run;
        this.Audio.playMultipleTimes('/static/game/music/dice.mp3',1,1);
        this.duration = 0.2;
        for (let i = 0; i < this.aimationList.length; i++) {
            this.Material = this.aimationList[i];
            await sleep(this.duration * 1000);
        }
        this.Material = this.numberList[number-1];
        this.number = number;
        this.Status = SieveCupType.stop;
    }
}