import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";
import { BuildPop } from "../ui/buildPop";

export class LiteBlock18 extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/wetland_park_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/wetland_parkd.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/wetland_park.png'
    constructor(land: Land,query: UniNamespace.SelectorQuery){
        super('lite-block-18', query);
        this.Land = land;
        this.UI = new BuildPop()
    }
}