import { JJGame } from "../gameSdk";

export interface StateLife {
    game: JJGame;
    init: () => void;
    preload: () => void;
    create: () => void;
    update: () => void;
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
    // 更新
    update() {
        console.log('请实现update方法')
    }
    // 渲染
    render() {
        this.game.data.ctx.draw()
    }
}