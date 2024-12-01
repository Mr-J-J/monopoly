import { Add } from './sdk/add'
import { Camera } from './sdk/camera'
import { Data } from './sdk/data'
import { Input } from './sdk/input'
import { Load } from './sdk/load'
import { Particles } from './sdk/particles'
import { Physics } from './sdk/physics'
import { Scale } from './sdk/scale'
import { Sound } from './sdk/sound'
import { Stage } from './sdk/stage'
import { State } from './sdk/state'
import { World } from './sdk/world'
export class JJGame{
	cvs: typeof uni.createCanvasContext
	data: Data
	// 场景管理对象
	state: State
	//游戏资源加载模块
	load: Load
	//游戏摄像机对象
	camera: Camera
	//游戏对象工厂
	add: Add
	//游戏中用户交互事件
	input: Input
	//游戏缩放模块
	scale: Scale			
	//游戏声音模块
	sound: Sound			
	//游戏舞台对象
	stage: Stage			
	//游戏中的世界对象
	world: World			
	//粒子系统
	particles: Particles		
	//物理引擎系统
	physics: Physics
	constructor(CanvasContext: typeof uni.createCanvasContext){
		// 画布
		this.cvs = CanvasContext
		this.data = new Data()
		this.state = new State(this.data)
		this.load = new Load(this.data)
		this.camera = new Camera(this.data);	
		this.add = new Add(this.data); 				
		this.input = new Input(this.data);
		this.scale = new Scale(this.data);
		this.sound = new Sound(this.data);
		this.stage = new Stage(this.data);
		this.world = new World(this.data);
		this.particles = new Particles(this.data);
		this.physics = new Physics(this.data);			
	}
}