import { Block } from "../../baseModel/block";
import { IBlockStatus } from "../../interface/block";

export class GameBlock extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/little_game_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/little_game.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/little_game.png'
    constructor(query: UniNamespace.SelectorQuery){
        super('game-block',query);
    }
}