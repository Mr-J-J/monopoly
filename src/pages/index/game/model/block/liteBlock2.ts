import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";

export class LiteBlock2 extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/baiyun_mountain_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/baiyun_mountain.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/baiyun_mountain.png'
    constructor(land: Land,query: UniNamespace.SelectorQuery){
        super('lite-block-2',query);
        this.Land = land;
    }
}