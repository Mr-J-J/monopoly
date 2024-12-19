import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";
import { BuildPop } from "../ui/buildPop";

export class LiteBlock19 extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/zoo_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/zoo.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/zoo.png'
    constructor(land: Land,query: UniNamespace.SelectorQuery){
        super('lite-block-19', query);
        this.Land = land;
        this.UI = new BuildPop()
    }
}