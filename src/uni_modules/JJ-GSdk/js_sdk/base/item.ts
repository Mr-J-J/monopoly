import { ItemInterFace } from "../interface/item";
import { Material } from "../interface/resource";

export class Item implements ItemInterFace {
    name: string;
    material: Material;
    constructor(name:string, material:Material){
        this.name = name;
        this.material = material;
    }
    
}