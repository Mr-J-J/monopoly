import { Block } from "../../baseModel/block";
import { IBlockStatus } from "../../interface/block";

export class PrisonBlock extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/prison_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/prison.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/prison.png'
    constructor(query: UniNamespace.SelectorQuery){
        super('prison-block',query);
    }
}