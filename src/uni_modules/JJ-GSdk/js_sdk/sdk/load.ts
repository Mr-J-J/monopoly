import { Material } from "../interface/resource";
import { Data } from "./data";

export class Load {
    data: Data;
	constructor(data: Data){
		this.data = data;
	}
	image(key:string, url:string,x:number = 0, y:number = 0, width:number = 0, height:number = 0): Material{
		this.data.resource.images[key] = new Material(url,x,y,width,height);
		return this.data.resource.images[key];
	}
}