import { Land } from "../../baseModel/land";

export class Building extends Land {
    Material: string = 'https://btxgdqn.oliyuno.com/dafuweng/block/buildings.png';
    money: number = 232;
    constructor(id:string,query: UniNamespace.SelectorQuery) {
        super(id,query);
    }
}