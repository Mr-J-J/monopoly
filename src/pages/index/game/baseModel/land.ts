import { Player } from "../model/player/player";
import { BaseModel } from "./baseModel";

export class Land extends BaseModel {
    Material: string = ''
    isBuild: boolean = false
    //主人
    master: Player = {} as Player
    money: number = 186
    constructor(id: string,query: UniNamespace.SelectorQuery) {
        super()
        query.select('#'+id).boundingClientRect((rect: any) => {
            this.info = rect
        }).exec()
    }
}