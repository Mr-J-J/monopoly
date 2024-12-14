import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";

export class GiftBlock extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/gift_box_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/gift_box.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/gift_box.png'
    constructor(id:string,land: Land,query: UniNamespace.SelectorQuery){
        super(id,query);
        this.Land = land;
    }
}