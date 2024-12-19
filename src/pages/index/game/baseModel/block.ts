import { IBlockStatus, IBlockStatusBg } from "../interface/block";
import { BaseModel } from "./baseModel";
import { Land } from "./land";
import { UI } from "./ui";

export class Block extends BaseModel {
    status: IBlockStatus = IBlockStatus.off
    statusBg: IBlockStatusBg = {} as IBlockStatusBg
    Material: string = ''
    Land: Land = {} as Land
    UI: UI = {} as UI
    Name: string = ''
    constructor(id: string,query: UniNamespace.SelectorQuery) {
        super()
        query.select('#'+id).boundingClientRect((rect: any) => {
            this.info = rect
        }).exec()
    }
    changeStatus(status: IBlockStatus) {
        this.status = status
        this.Material = this.statusBg[this.status]
    }
    async event(){
        this.UI.Show = true;
    }
}