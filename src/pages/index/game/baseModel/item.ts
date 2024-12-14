import { BaseModel } from "./baseModel";

export class Item extends BaseModel {
    Material: string = ''
    Status: any
    constructor(id: string,query: UniNamespace.SelectorQuery) {
        super()
        setTimeout(() => {
            query.select('#'+id).boundingClientRect((rect: any) => {
                this.info = {...rect,Zindex: 1,x: rect.left, y: rect.top, scale: 1}
            }).exec()
        }, 200);
        
    }
}