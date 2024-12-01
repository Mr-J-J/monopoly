import { Rect } from "../interface/item";
import { Data } from "./data";

export class Add {
    data: Data;
	constructor(data: Data){
		this.data = data;
	}
	image(key: string,x: number = 0,y: number = 0, width: number = 0, height: number = 0): Rect{
		
		this.data.ctx.drawImage(this.data.resource.images[key].path,this.data.resource.images[key].x,this.data.resource.images[key].y,this.data.resource.images[key].width,this.data.resource.images[key].height,x,y,width,height);
		
		let rect: Rect = {
			bottom: y + height,
			height: height,
			left: x,
			right: x + width,
			top: y,
			width: width,
			x: x,
			y: y
		}
		return rect;
	}
}