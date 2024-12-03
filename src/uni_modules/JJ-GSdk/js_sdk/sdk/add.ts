import { Color } from "../model/color";
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
	color(colorStr: string, x: number = 0, y: number = 0, width: number = 0, height: number = 0){
		const color:Color = new Color(colorStr,x,y,width,height)
		this.world.renderQueue.push(color)
		return color;
	}
	image(key: string,x: number = 0,y: number = 0, width: number = 0, height: number = 0,rotate: number = 0): Image{
		const img: Image = new Image(this.data.resource.images[key],x,y,width,height)
		img.vector3.origin.x = width/2
		img.vector3.origin.y = height/2
		img.vector3.rotation = rotate;
		this.world.renderQueue.push(img)
		return img;
	}
	entity(entity: Entity){
		entity.data = this.data;
		this.world.renderQueue.push(entity)
		return entity;
	}
	
}