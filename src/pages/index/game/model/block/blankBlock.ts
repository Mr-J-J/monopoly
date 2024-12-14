import { Block } from "../../baseModel/block";
import { IBlockStatus } from "../../interface/block";

export class BlankBlock extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/big_bank_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/big_bank.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/big_bank.png'
    constructor(query: UniNamespace.SelectorQuery){
        super('blank-block',query);
    }
}