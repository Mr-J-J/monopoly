import { Script } from "@/uni_modules/JJ-GSdk/js_sdk/base/script"
import { People } from "../baseModel/people"
export class Player extends People implements Script{
    constructor() {
        super();
    }
    public Start(): void {
        this.material = this.data.resource.images['little_game_button']
    }
    public Update(): void {
        this.vector3.x += 1;
        this.vector3.y += 1;
    }
}