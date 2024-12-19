import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";
import { BuildPop } from "../ui/buildPop";

export class LiteBlock7 extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/golden_sands_beach_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/golden_sands_beach.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/golden_sands_beach.png'
    constructor(land: Land,query: UniNamespace.SelectorQuery){
        super('lite-block-7', query);
        this.Land = land;
        this.UI = new BuildPop()
    }
}