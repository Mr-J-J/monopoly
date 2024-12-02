import { GameState } from '@/uni_modules/JJ-GSdk/js_sdk/interface/state'
import { People } from './baseModel/people'
import { Player } from './model/player'
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
    const player1 = new Player(this.game.data.resource.images['little_game_button'])
    this.game.add.entity(player1)
  }
  update(){

  }
}