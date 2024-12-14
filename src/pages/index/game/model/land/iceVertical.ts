import { Land } from "../../baseModel/land";

export class IceVertical extends Land {
    Material: string = 'https://btxgdqn.oliyuno.com/dafuweng/block/Vertical_Ice.png';
    constructor(id:string,query: UniNamespace.SelectorQuery) {
        super(id,query);
    }
}