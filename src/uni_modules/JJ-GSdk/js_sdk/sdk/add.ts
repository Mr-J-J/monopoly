import { Entity } from "../model/entity";
import { Image } from "../model/image";
import { Data } from "./data";

export class Add {
    data: Data;
	constructor(data: Data){
		this.data = data;
	}
	image(key: string,x: number = 0,y: number = 0, width: number = 0, height: number = 0): Image{
		const img: Image = new Image(this.data.resource.images[key],x,y,width,height)
		this.data.renderQueue.push(img)
		return img;
	}
	entity(entity: Entity){
		this.data.renderQueue.push(entity)
	}
	
}