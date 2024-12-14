import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";

export class LiteBlock12 extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/mangrove_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/mangrove.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/mangrove.png'
    constructor(land: Land,query: UniNamespace.SelectorQuery){
        super('lite-block-12', query);
        this.Land = land;
    }
}