import { IBlockStatus, IBlockStatusBg } from "../interface/block";
import { BaseModel } from "./baseModel";
import { Land } from "./land";

export class Block extends BaseModel {
    status: IBlockStatus = IBlockStatus.off
    statusBg: IBlockStatusBg = {} as IBlockStatusBg
    Material: string = ''
    Land: Land = {} as Land
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
    event(){
        
    }
}