import { Entity } from "../model/entity";
import { Image } from "../model/image";
import { Data } from "./data";
import { World } from "./world";

export class Add {
    data: Data;
	world: World;
	constructor(data: Data, world: World){
		this.data = data;
		this.world = world;
	}
	image(key: string,x: number = 0,y: number = 0, width: number = 0, height: number = 0): Image{
		const img: Image = new Image(this.data.resource.images[key],x,y,width,height,this.data)
		this.world.renderQueue.push(img)
		return img;
	}
	entity(entity: Entity){
		entity.data = this.data;
		this.world.renderQueue.push(entity)
	}
	
}