import { Data } from "./data";

export class Load {
    data: Data;
	constructor(data: Data){
		this.data = data;
	}
	image(key:string, url:string,x:number = 0, y:number = 0, width:number = 0, height:number = 0){
		this.data.resource.images[key] = {
			path:url,
			x:x,
			y:y,
			width:width,
			height:height
		};
		return this.data.resource.images[key]
	}
}