import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";

export class LiteBlock10 extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/lotus_village_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/lotus_village.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/lotus_village.png'
    constructor(land: Land,query: UniNamespace.SelectorQuery){
        super('lite-block-10', query);
        this.Land = land;
    }
}