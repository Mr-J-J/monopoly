import { AudioCol } from "../../controller/Audio";
import { IPlayerRole, IPlayerSkin, IPlayerStatus } from "../../interface/player";
import { Player } from "./player";

/**
 * 机器人
 */
export class Robot extends Player {
    constructor(id: number,name:string, Material: IPlayerSkin, role: IPlayerRole, audio:AudioCol,query: UniNamespace.SelectorQuery) {
        super(id,name, Material, role, audio, query);
    }
}