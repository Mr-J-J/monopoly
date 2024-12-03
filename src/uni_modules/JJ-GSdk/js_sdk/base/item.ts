import { ItemInterFace } from "../interface/item";

export class Item implements ItemInterFace {
    name: string;
    constructor(name:string){
        this.name = name;
    }
    
}