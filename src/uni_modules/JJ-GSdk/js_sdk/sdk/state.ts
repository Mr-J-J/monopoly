import { StateContext, StateLife } from "../interface/state";
import { Data } from "./data";

export class State {
    data: Data;
	state: StateContext;
	constructor(data: Data){
		this.data = data;
		this.state = {}
	}
	add(key: string, value: StateLife){
		this.state[key] = value;
	}
	start(key: string){
		this.state[key].init();
		this.state[key].preload();
		this.state[key].create();
	}
}