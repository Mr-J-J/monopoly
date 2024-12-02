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
        for (let i = 0; i < this.game.data.renderQueue.length; i++) {
            let item = this.game.data.renderQueue[i];
            item.Start();
        }
    }
    // 更新
    _update() {
        for (let i = 0; i < this.game.data.renderQueue.length; i++) {
            let item = this.game.data.renderQueue[i];
            item.Update();
        }
    }
    // 渲染
    render() {
        for (let i = 0; i < this.game.data.renderQueue.length; i++) {
            let item = this.game.data.renderQueue[i];
            if(item.show && item.material && item.vector3){
                this.game.data.ctx.drawImage(item.material.path, item.material.x, item.material.y, item.material.width, item.material.height,item.vector3.x, item.vector3.y, item.vector3.width, item.vector3.height)
            }
        }
        this.game.data.ctx.draw()
    }
}