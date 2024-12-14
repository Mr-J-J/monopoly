import { Block } from "../../baseModel/block";
import { IBlockStatus } from "../../interface/block";

export class StartBlock extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/starting_point_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/starting_point.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/starting_point.png'
    constructor(query: UniNamespace.SelectorQuery){
        super('start-block',query);
    }
}