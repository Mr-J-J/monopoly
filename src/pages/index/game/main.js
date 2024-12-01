import { GameState } from '@/uni_modules/JJ-GSdk/js_sdk/interface/state'
/**
 * 游戏主函数
 */
export default class Main extends GameState {
  /**
   * 构造
   */
  constructor(game) {
    super(game)
  }
  init() {
    console.log('初始化')
    console.log(this.game)
  }
  preload() {
    this.game.load.image('little_game_button', '/static/game/suspend.png', 305, 698, 142, 155)
  }

  create() {
    this.game.add.image('little_game_button',0, 0, 100, 100);
  }

  update () {
    
  }
  
}