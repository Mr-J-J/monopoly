import { Desk } from "../../baseModel/deskModel";

export class Tables extends Desk {
    Material: string = 'https://btxgdqn.oliyuno.com/dafuweng/random_rewards/ask_prize_box.png';
    constructor(id:string,query: UniNamespace.SelectorQuery) {
        super(id,query);
    }
}