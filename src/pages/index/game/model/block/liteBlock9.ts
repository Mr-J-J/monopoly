import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";
import { BuildPop } from "../ui/buildPop";

export class LiteBlock9 extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/jewelry_town_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/jewelry_town.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/jewelry_town.png'
    constructor(land: Land,query: UniNamespace.SelectorQuery){
        super('lite-block-9', query);
        this.Land = land;
        this.UI = new BuildPop()
    }
}