import { Land } from "../../baseModel/land";

export class Clearing extends Land {
    Material: string = 'https://btxgdqn.oliyuno.com/dafuweng/building/station_sign.png';
    constructor(id:string,query: UniNamespace.SelectorQuery) {
        super(id,query);
    }
}