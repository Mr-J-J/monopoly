import { Script } from "@/uni_modules/JJ-GSdk/js_sdk/base/script"
import { People } from "../baseModel/people"
import { Material } from "@/uni_modules/JJ-GSdk/js_sdk/interface/resource"
export class Player extends People implements Script{
    constructor(material: Material) {
        super(material)
    }
    public Start(): void {
        this.vector3.x = 0;
        this.vector3.y = 0;
    }
    public Update(): void {
        this.vector3.x += 1;
    }
}