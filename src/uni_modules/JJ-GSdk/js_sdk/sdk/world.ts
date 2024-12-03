import { Entity } from "../model/entity";
import { Data } from "./data";

export class World {
    data: Data;
	// 渲染队列
    renderQueue: Entity[] = []
	constructor(data: Data){
		this.data = data;
	}
}