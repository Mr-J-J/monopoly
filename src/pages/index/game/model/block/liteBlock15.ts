import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";

export class LiteBlock15 extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/seagull_island_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/seagull_island.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/seagull_island.png'
    constructor(land: Land,query: UniNamespace.SelectorQuery){
        super('lite-block-15', query);
        this.Land = land;
    }
}