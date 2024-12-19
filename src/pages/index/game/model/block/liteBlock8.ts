import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";
import { BuildPop } from "../ui/buildPop";

export class LiteBlock8 extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/guanhu_town_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/guanhu_town.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/guanhu_town.png'
    constructor(land: Land,query: UniNamespace.SelectorQuery){
        super('lite-block-8', query);
        this.Land = land;
        this.UI = new BuildPop()
    }
}