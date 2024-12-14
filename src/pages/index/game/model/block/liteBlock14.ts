import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";

export class LiteBlock14 extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/Osmanthus_Island_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/Osmanthus_Island.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/Osmanthus_Island.png'
    constructor(land: Land,query: UniNamespace.SelectorQuery){
        super('lite-block-14', query);
        this.Land = land;
    }
}