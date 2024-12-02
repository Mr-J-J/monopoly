import { Entity } from "../model/entity";
import { Resource } from "../interface/resource";

export class Data{
    // 画布
    ctx: UniApp.CanvasContext
    // 资源
    resource: Resource
    // 渲染队列
    renderQueue: Entity[] = []
    constructor(ctx: UniApp.CanvasContext){
        this.resource = {
            images: {},
        }
        this.ctx = ctx
    }
}