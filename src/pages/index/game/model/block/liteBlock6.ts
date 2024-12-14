import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";

export class LiteBlock6 extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/fuksing_street_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/fuksing_street.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/fuksing_street.png'
    constructor(land: Land,query: UniNamespace.SelectorQuery){
        super('lite-block-6', query);
        this.Land = land;
    }
}