import { Item } from "../baseModel/item";

/**
 * 筛盅
 */
export class SieveCup extends Item {
    Material: string = '';
    constructor(id:string,query: UniNamespace.SelectorQuery) {
        super(id,query);
    }
}