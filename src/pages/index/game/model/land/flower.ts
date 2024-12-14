import { Land } from "../../baseModel/land";

export class Flower extends Land {
    Material: string = 'https://btxgdqn.oliyuno.com/dafuweng/block/flowers_plants.png';
    constructor(id:string,query: UniNamespace.SelectorQuery) {
        super(id,query);
    }
}