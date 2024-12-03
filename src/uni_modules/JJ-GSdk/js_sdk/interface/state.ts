import { JJGame } from "../gameSdk";

export interface StateLife {
    game: JJGame;
    init: () => void;
    preload: () => void;
    create: () => void;
    update: () => void;
    _create: () => void;
    _update: () => void;
    render: () => void;
}
export interface StateContext {
    [key: string]: StateLife | GameState;
}
export class GameState {
    game: JJGame
    constructor(game: JJGame) {
        this.game = game;
    }
    // 初始化
    init() {
        console.log('请实现init方法')
    }
    // 加载
    preload() {
        console.log('请实现preload方法')
    }
    // 创建
    create() {
        console.log('请实现create方法')
    }
    update(){
        console.log('请实现update方法')
    }
    _create() {
        for (let i = 0; i < this.game.world.renderQueue.length; i++) {
            let item = this.game.world.renderQueue[i];
            item.vector3.x = this.game.tools.coordinateTransform(item.vector3.x,'x')
            item.vector3.y = this.game.tools.coordinateTransform(item.vector3.y,'y')
            item.Start();
        }
    }
    // 更新
    _update() {
        for (let i = 0; i < this.game.world.renderQueue.length; i++) {
            let item = this.game.world.renderQueue[i];
            item.Update();
        }
    }
    // 渲染
    render() {
        for (let i = 0; i < this.game.world.renderQueue.length; i++) {
            let item = this.game.world.renderQueue[i];
            if(item.show && item.material && item.vector3){
                if(item.material.type == 'image'){
                    // 获取坐标
                    const originX = item.vector3.x + item.vector3.origin.x
                    const originY = item.vector3.y + item.vector3.origin.y
                    // 角度旋转系数
                    const ratio = Math.PI / 180
                    // 定位到物体中心
                    this.game.data.ctx.translate(originX, originY);
                    this.game.data.ctx.rotate(item.vector3.rotation * ratio);
                    this.game.data.ctx.translate(-originX, -originY);
                    this.game.data.ctx.drawImage(item.material.path, item.material.x, item.material.y, item.material.width, item.material.height,item.vector3.x, item.vector3.y, item.vector3.width, item.vector3.height)
                    this.game.data.ctx.translate(originX, originY);
                    this.game.data.ctx.rotate(-item.vector3.rotation * ratio);
                    this.game.data.ctx.translate(-originX, -originY);
                }else if(item.material.type == 'color'){
                    this.game.data.ctx.fillStyle = item.material.path;
                    this.game.data.ctx.fillRect(item.vector3.x, item.vector3.y, item.vector3.width, item.vector3.height)
                }
                
            }
        }
        this.game.data.ctx.draw()
    }
}