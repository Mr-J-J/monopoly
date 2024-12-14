import { BaseModel } from "./baseModel";

export class CardModel extends BaseModel {
    Material: string = ''
    constructor(id: string,query: UniNamespace.SelectorQuery) {
        super()
        query.select('#'+id).boundingClientRect((rect: any) => {
            this.info = rect
        }).exec()
    }
}