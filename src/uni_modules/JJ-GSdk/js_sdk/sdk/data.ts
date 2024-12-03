import { Resource } from "../interface/resource";
import { ctxEleInfo } from "../interface/game";

export class Data{
    // 画布
    ctx: UniApp.CanvasContext
    ctx_id: string
    ctx_ele: ctxEleInfo
    // 资源
    resource: Resource
    constructor(ctxEleInfo: ctxEleInfo){
        this.resource = {
            images: {},
        }
        this.ctx = uni.createCanvasContext(ctxEleInfo.id)
        this.ctx_id = ctxEleInfo.id
        this.ctx_ele = ctxEleInfo
    }
}