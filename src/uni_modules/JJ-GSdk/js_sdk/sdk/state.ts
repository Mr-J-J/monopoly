import { StateContext, StateLife } from "../interface/state";

export class State {
	state: StateContext;
	FPS: number;
	interval: number; // 每帧之间的间隔时间
	lastTime: number = 0; // 上一次执行的时间
	id: number = 0; // 定时器id
	constructor(FPS: number = 60){
		this.state = {}
		this.FPS = FPS;
		this.interval = 1000 / FPS;
	}
	add(key: string, value: StateLife){
		this.state[key] = value;
	}
	start(key: string){
		this.state[key].init();
		this.state[key].preload();
		this.state[key].create();// 创建游戏
		this.state[key]._create();// _create为默认声明周期用来条用脚本start方法
		this.id = this.requestAnimationFrame(()=>{
			this.state[key].update(); // 更新游戏
			this.state[key]._update();// _update为默认声明周期用来条用脚本update方法
			this.state[key].render();
		})
	}
	requestAnimationFrame(cb: Function): number{
		cb()
		this.lastTime = new Date().getTime();
		return setTimeout(()=>{
			this.requestAnimationFrame(cb)
		}, this.interval); 
	}
	cancelAnimationFrame(frameId: number){
	    if (typeof cancelAnimationFrame === 'function') {
			cancelAnimationFrame(frameId);
		  } else if (typeof clearTimeout === 'function') {
			clearTimeout(frameId);
		  }
	}
}