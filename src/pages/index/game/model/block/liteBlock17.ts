import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";

export class LiteBlock17 extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/south_bay_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/south_bay.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/south_bay.png'
    constructor(land: Land,query: UniNamespace.SelectorQuery){
        super('lite-block-17', query);
        this.Land = land;
    }
}