import { GameState } from '@/uni_modules/JJ-GSdk/js_sdk/interface/state'
/**
 * 游戏主函数
 */
export default class Main extends GameState {

  /**
   * 构造
   */
  constructor() {
    super()
  }
  init() {
    console.log('初始化')
  }
  preload() {
    console.log('载入素材')
    this.game.load.image('bg', '@/static/game/dice.png')
    console.log(this.game);
  }

  create() {
    console.log('创建内容')
    let back = game.add.image('bg',0, 0);
  }

  update () {
    console.log('更新')
  }

}