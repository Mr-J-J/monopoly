import { Block } from "../../baseModel/block";
import { Land } from "../../baseModel/land";
import { IBlockStatus } from "../../interface/block";

export class BusBlock extends Block {
    status = IBlockStatus.off;
    statusBg = {
        on: 'https://btxgdqn.oliyuno.com/dafuweng/block/station_narrow.png',
        off: 'https://btxgdqn.oliyuno.com/dafuweng/block/station.png'
    }
    Material = 'https://btxgdqn.oliyuno.com/dafuweng/block/station.png'
    constructor(id:string,land: Land,query: UniNamespace.SelectorQuery){
        super(id,query);
        this.Land = land;
    }
}