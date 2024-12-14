import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";

export class UnknowBlock extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/random_events.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/random_events.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/random_events.png'
    constructor(id:string,land: Land,query: UniNamespace.SelectorQuery){
        super(id,query);
        this.Land = land;
    }
}