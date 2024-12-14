import { Desk } from "../../baseModel/deskModel";

export class GameDesk extends Desk {
    Material: string = 'https://btxgdqn.oliyuno.com/dafuweng/dice/dice_box.png';
    constructor(id:string,query: UniNamespace.SelectorQuery) {
        super(id,query);
    }
}