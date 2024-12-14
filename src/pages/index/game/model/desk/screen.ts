import { Desk } from "../../baseModel/deskModel";

export class Screen extends Desk {
    Material: string = 'https://btxgdqn.oliyuno.com/dafuweng/matching_list/matching_lists.png';
    constructor(id:string,query: UniNamespace.SelectorQuery) {
        super(id,query);
    }
}