import { Land } from "../../baseModel/land";

export class Money extends Land {
    Material: string = 'https://btxgdqn.oliyuno.com/dafuweng/block/randomEvents.png';
    constructor(id:string,query: UniNamespace.SelectorQuery) {
        super(id,query);
    }
}