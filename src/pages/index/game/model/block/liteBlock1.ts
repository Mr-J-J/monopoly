import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";

export class LiteBlock1 extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/baiyun_airport_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/baiyun_airport.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/baiyun_airport.png'
    constructor(land: Land,query: UniNamespace.SelectorQuery){
        super('lite-block-1', query);
        this.Land = land;
    }
}