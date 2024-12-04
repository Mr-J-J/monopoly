import { Entity } from "@/uni_modules/JJ-GSdk/js_sdk/model/entity";
import { Script } from "@/uni_modules/JJ-GSdk/js_sdk/base/script";
import { BlockStatus, StatusMaterial } from "../interface/block";


export class Block extends Entity implements Script {
    status: BlockStatus = BlockStatus.off;
    status_materials: StatusMaterial = {} as StatusMaterial;
    constructor() {
        super('block');
        this.vector3.height = 100;
        this.vector3.width = 100;
    }
    Start(){}
    Update(){}
}