import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";

export class LiteBlock3 extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/beijing_road_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/beijing_road.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/beijing_road.png'
    constructor(land: Land,query: UniNamespace.SelectorQuery){
        super('lite-block-3', query);
        this.Land = land;
    }
}