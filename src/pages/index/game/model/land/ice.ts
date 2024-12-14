import { Land } from "../../baseModel/land";

export class Ice extends Land {
    Material: string = 'https://btxgdqn.oliyuno.com/dafuweng/block/Crushed_ice.png';
    constructor(id:string,query: UniNamespace.SelectorQuery) {
        super(id,query);
    }
}