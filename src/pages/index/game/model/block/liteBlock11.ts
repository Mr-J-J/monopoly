import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";
import { BuildPop } from "../ui/buildPop";

export class LiteBlock11 extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/Luohu_Park_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/Luohu_Park.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/Luohu_Park.png'
    constructor(land: Land,query: UniNamespace.SelectorQuery){
        super('lite-block-11', query);
        this.Land = land;
        this.UI = new BuildPop()
    }
}