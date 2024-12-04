import { GameState } from '@/uni_modules/JJ-GSdk/js_sdk/interface/state'
import { JJGame } from '@/uni_modules/JJ-GSdk/js_sdk/gameSdk'
import { StartBlock } from './model/block/startBlock'
import { LiteGame } from './model/block/liteGame'
/**
 * 游戏主函数
 */
export default class Main extends GameState {
  /**
   * 构造
   */
  constructor(game: JJGame) {
    super(game)
  }
  init() {
    console.log('初始化')
    console.log(this.game)
  }
  preload() {
    this.game.load.image('Stars_shine_brightly', '/static/game/Stars_shine_brightly.png', 0, 0, 750, 1800)
    // 小游戏
    this.game.load.image('little_game_button', '/static/game/suspend.png', 305, 698, 142, 155)
    // 锦绣公园
    this.game.load.image('fairview_park', '/static/game/suspend.png', 1209, 1021, 92, 79)
    // 罗湖公园
    this.game.load.image('luohu_park', '/static/game/suspend.png', 1517, 691, 79, 92)
    // 车站
    this.game.load.image('station_one', '/static/game/suspend.png', 1585, 1105, 92, 79)
    // 和平路
    this.game.load.image('peace_road', '/static/game/suspend.png', 1516, 785, 92, 79)
    // 华侨城
    this.game.load.image('OCT', '/static/game/suspend.png',960, 839, 79, 92)
    // 起点
    this.game.load.image('starting_point', '/static/game/suspend.png', 359, 542, 142, 155)

    // 南海湾
    this.game.load.image('south_bay', '/static/game/suspend.png', 603, 831, 79, 92)
    // 解放路
    this.game.load.image('liberation_road', '/static/game/suspend.png', 960, 934, 79, 92)
    // ? 随机事件
    this.game.load.image('random_events_one', '/static/game/suspend.png', 1032, 1084, 79, 92)
    // 人民广场
    this.game.load.image('peoples_square', '/static/game/suspend.png', 1437, 638, 79, 92)
    // 礼物盒
    this.game.load.image('gift_box_one', '/static/game/suspend.png', 1491, 1105, 92, 79)
    // 车站
    this.game.load.image('station_two', '/static/game/suspend.png', 1585, 1105, 92, 79)
    // 大新花园
    this.game.load.image('daxin_garden', '/static/game/suspend.png', 1517, 596, 79, 92)
    // 深南大道
    this.game.load.image('shennan_avenue', '/static/game/suspend.png', 1515, 864, 92, 79)
    // ? 随机事件 
    this.game.load.image('random_events_two', '/static/game/suspend.png', 1032, 1084, 79, 92)
    // 博物馆
    this.game.load.image('museum', '/static/game/suspend.png', 1509, 944, 92, 79)
    // 大银行
    this.game.load.image('big_banks', '/static/game/suspend.png', 677, 673, 142, 155)

    // 会展中心
    this.game.load.image('CAE_center', '/static/game/suspend.png', 1415, 897, 92, 79)
    // 莲花村
    this.game.load.image('lotus_village', '/static/game/suspend.png', 1114, 1009, 92, 79)
    // 车站
    this.game.load.image('station_three', '/static/game/suspend.png', 1585, 1105, 92, 79)
    // 动物园
    this.game.load.image('zoo', '/static/game/suspend.png', 1310, 961, 92, 79)
    // 官湖镇
    this.game.load.image('guanhu_town', '/static/game/suspend.png', 1216, 940, 92, 79)
    // 监狱
    this.game.load.image('prison', '/static/game/suspend.png', 819, 674, 142, 155)

    // 世界之窗
    this.game.load.image('world_window', '/static/game/suspend.png', 1726, 163, 79, 92)
    // 红树林
    this.game.load.image('mangrove', '/static/game/suspend.png', 1396, 1057, 92, 79)
    // ? 随机事件
    this.game.load.image('random_events_three', '/static/game/suspend.png', 1032, 1084, 79, 92)
    // 金沙海滩
    this.game.load.image('golden_sands_beach', '/static/game/suspend.png', 1404, 976, 92, 79)
    // 车站
    this.game.load.image('station_four', '/static/game/suspend.png', 1585, 1105, 92, 79)
    // ? 随机事件
    this.game.load.image('random_events_four', '/static/game/suspend.png', 1032, 1084, 79, 92)
    // 福星街
    this.game.load.image('fuk_sing_street', '/static/game/suspend.png', 1242, 860, 92, 79)
    // 海滨海滩
    this.game.load.image('seaside_beach', '/static/game/suspend.png', 1302, 1041, 92, 79)
    // 礼物盒
    this.game.load.image('gift_box_two', '/static/game/suspend.png', 1491, 1105, 92, 79)
    // 图书馆
    this.game.load.image('lidrary', '/static/game/suspend.png', 1726, 257, 79, 92)

    // 土地
    this.game.load.image('land_one', '/static/game/suspend.png', 962, 673, 76, 165)   //  旋转
    // 车站标识
    this.game.load.image('station_sign_one', '/static/game/suspend.png', 1040, 997, 72, 86)
    // 土地
    this.game.load.image('land_two', '/static/game/suspend.png', 962, 673, 76, 165)   //  旋转

    // 土地
    this.game.load.image('land_three', '/static/game/suspend.png', 1029, 497, 76, 165)
    // 随机事件
    this.game.load.image('random_events_five', '/static/game/suspend.png', 1032, 1084, 79, 92) 
    // 建筑
    this.game.load.image('buildings_one', '/static/game/suspend.png', 598, 925, 79, 80)
    // 礼物盒奖励
    this.game.load.image('giftbox_rewards_one', '/static/game/suspend.png', 1041, 832, 75, 75)
    // 车站标识
    this.game.load.image('station_sign_two', '/static/game/suspend.png', 1040, 997, 72, 86)
    // 土地
    this.game.load.image('land_four', '/static/game/suspend.png', 1029, 497, 76, 165)
    // 随机事件
    this.game.load.image('random_events_five', '/static/game/suspend.png', 1032, 1084, 79, 92)
    // 建筑
    this.game.load.image('buildings_two', '/static/game/suspend.png', 598, 925, 79, 80)

    // 土地
    this.game.load.image('land_five', '/static/game/suspend.png', 962, 673, 76, 165)   //  旋转
    // 车站标识
    this.game.load.image('station_sign_three', '/static/game/suspend.png', 1040, 997, 72, 86)
    // 土地
    this.game.load.image('land_six', '/static/game/suspend.png', 962, 673, 76, 165)   //  旋转

    // 土地
    this.game.load.image('land_seven', '/static/game/suspend.png', 1040, 666, 76, 165)
    // 随机事件
    this.game.load.image('random_events_six', '/static/game/suspend.png', 1032, 1084, 79, 92)
    // 建筑
    this.game.load.image('buildings_three', '/static/game/suspend.png', 598, 925, 79, 80)
    // 随机事件
    this.game.load.image('random_events_seven', '/static/game/suspend.png', 1032, 1084, 79, 92)
    // 车站标识
    this.game.load.image('station_sign_four', '/static/game/suspend.png', 1040, 997, 72, 86)
    // 土地
    this.game.load.image('land_eight', '/static/game/suspend.png', 1040, 666, 76, 165)
    // 礼物盒奖励
    this.game.load.image('giftbox_rewards_two', '/static/game/suspend.png', 1041, 832, 75, 75)
    // 建筑
    this.game.load.image('buildings_four', '/static/game/suspend.png', 598, 925, 79, 80)

    // 匹配列表 
    this.game.load.image('matching_lists', '/static/game/suspend.png', 0, 429, 360, 255)
    // 颜色框
    this.game.load.image('red_box', '/static/game/suspend.png', 735, 223, 313, 60)
    this.game.load.image('yellow_box', '/static/game/suspend.png', 735, 285, 313, 60)
    this.game.load.image('blue_box', '/static/game/suspend.png', 754, 111, 313, 50)
    this.game.load.image('green_box', '/static/game/suspend.png', 735, 161, 313, 60)
    // 发光框
    this.game.load.image('red_glowing_frame', '/static/game/suspend.png', 565, 150, 68, 325)
    this.game.load.image('yellow_glowing_frame', '/static/game/suspend.png', 653, 150, 68, 325)
    this.game.load.image('green_glowing_frame', '/static/game/suspend.png', 480, 150, 68, 325)
    this.game.load.image('blue_glowing_frame', '/static/game/suspend.png', 1166, 7, 325, 68)
    // 匹配列表money图标
    this.game.load.image('money', '/static/game/suspend.png', 1453, 602, 40, 35)
    // 破产框
    this.game.load.image('bankruptcy', '/static/game/suspend.png', 0, 940, 320, 55)
    // 匹配列表浅灰色框---钱数
    this.game.load.image('lightgray_box', '/static/game/suspend.png', 1157, 86, 220, 30)
    // 匹配列表灰色框---用户名
    this.game.load.image('gray_box', '/static/game/suspend.png', 1048, 314, 55, 148)

    // ? 和 奖 框
    this.game.load.image('ask_prize_box', '/static/game/suspend.png', 0, 686, 305, 185)
    // ?
    this.game.load.image('ask_box', '/static/game/suspend.png', 0, 1054, 210, 150)
    // 奖
    this.game.load.image('prize_box', '/static/game/suspend.png', 210, 1054, 210, 150)

    // 骰子框
    this.game.load.image('dice_box', '/static/game/suspend.png', 0, 141, 360, 280)
    // 骰子
    this.game.load.image('dice_one', '/static/game/suspend.png', 1229, 413, 125, 130)
    this.game.load.image('dice_two', '/static/game/suspend.png', 1116, 663, 125, 130)
    this.game.load.image('dice_three', '/static/game/suspend.png', 1353, 413, 125, 130)
    this.game.load.image('dice_four', '/static/game/suspend.png', 1116, 797, 125, 130)
    this.game.load.image('dice_five', '/static/game/suspend.png', 1373, 87, 125, 130)
    this.game.load.image('dice_six', '/static/game/suspend.png', 1496, 87, 125, 130)

    // 红色建筑
    this.game.load.image('red_building_one', '/static/game/suspend.png', 417, 993, 70, 60)
    this.game.load.image('red_building_two', '/static/game/suspend.png', 887, 828, 72, 85)
    this.game.load.image('red_building_three', '/static/game/suspend.png', 1724, 455, 85, 102)
    this.game.load.image('red_building_four', '/static/game/suspend.png', 315, 994, 102, 60)
    this.game.load.image('red_building_five', '/static/game/suspend.png', 1335, 825, 78, 105)
    // 红色车站
    this.game.load.image('red_station', '/static/game/suspend.png', 1040, 906, 72, 90)

    // 绿色建筑
    this.game.load.image('green_building_one', '/static/game/suspend.png', 456, 923, 60, 70)
    this.game.load.image('green_building_two', '/static/game/suspend.png', 1597, 688, 70, 90)
    this.game.load.image('green_building_three', '/static/game/suspend.png', 335, 854, 105, 85)
    this.game.load.image('green_building_four', '/static/game/suspend.png', 785, 907, 102, 60)
    this.game.load.image('green_building_five', '/static/game/suspend.png', 1113, 929, 102, 78)
    // 绿色车站
    this.game.load.image('green_station', '/static/game/suspend.png', 421, 1055, 72, 90)

    // 蓝色建筑
    this.game.load.image('blue_building_one', '/static/game/suspend.png', 1683, 806, 70, 60)
    this.game.load.image('blue_building_two', '/static/game/suspend.png', 1597, 595, 72, 85)
    this.game.load.image('blue_building_three', '/static/game/suspend.png', 1724, 350, 85, 102)
    this.game.load.image('blue_building_four', '/static/game/suspend.png', 682, 907, 102, 60)
    this.game.load.image('blue_building_five', '/static/game/suspend.png', 784, 828, 103, 78)
    // 蓝色车站
    this.game.load.image('blue_station', '/static/game/suspend.png', 1609, 782, 72, 90)

    // 黄色建筑
    this.game.load.image('yellow_building_one', '/static/game/suspend.png', 1385, 351, 70, 60)
    this.game.load.image('yellow_building_two', '/static/game/suspend.png', 890, 921, 69, 90)
    this.game.load.image('yellow_building_three', '/static/game/suspend.png', 1620, 200, 105, 85)
    this.game.load.image('yellow_building_four', '/static/game/suspend.png', 499, 830, 102, 60)
    this.game.load.image('yellow_building_five', '/static/game/suspend.png', 682, 829, 102, 78)
    // 黄色车站
    this.game.load.image('yellow_station', '/static/game/suspend.png', 1423, 822, 90, 72)
    // 戚安安
    this.game.load.image('yellow_qianan', '/static/game/Human_avatar.png', 0, 1, 130, 140)
    this.game.load.image('red_qianan', '/static/game/Human_avatar.png', 0, 139, 130, 140)
    this.game.load.image('green_qianan', '/static/game/Human_avatar.png', 0, 277, 130, 140)
    this.game.load.image('blue_qianan', '/static/game/Human_avatar.png', 131, 1, 130, 140)

    // 白狐
    this.game.load.image('yellow_fox', '/static/game/Human_avatar.png', 262, 1, 100, 130)
    this.game.load.image('red_fox', '/static/game/Human_avatar.png', 368, 1, 100, 130)
    this.game.load.image('green_fox', '/static/game/Human_avatar.png', 368, 135, 100, 130)
    this.game.load.image('blue_fox', '/static/game/Human_avatar.png', 368, 268, 100, 130)

    // 练习生
    this.game.load.image('yellow_trainees', '/static/game/Human_avatar.png', 473, 1, 100, 130)
    this.game.load.image('red_trainees', '/static/game/Human_avatar.png', 473, 135, 100, 130)
    this.game.load.image('green_trainees', '/static/game/Human_avatar.png', 473, 268, 100, 130)
    this.game.load.image('blue_trainees', '/static/game/Human_avatar.png', 576, 1, 100, 130)

    // 野蛮人
    this.game.load.image('yellow_barbarian', '/static/game/Human_avatar.png', 576, 135, 120, 130)
    this.game.load.image('red_barbarian', '/static/game/Human_avatar.png', 682, 1, 120, 130)
    this.game.load.image('green_barbarian', '/static/game/Human_avatar.png', 576, 267, 120, 130)
    this.game.load.image('blue_barbarian', '/static/game/Human_avatar.png', 699, 134, 120, 130)

    // 熊九九
    this.game.load.image('yellow_xiongjiujiu', '/static/game/Human_avatar.png', 802, 1, 120, 130)
    this.game.load.image('red_xiongjiujiu', '/static/game/Human_avatar.png', 698, 265, 120, 130)
    this.game.load.image('green_xiongjiujiu', '/static/game/Human_avatar.png', 819, 132, 120, 130)
    this.game.load.image('blue_xiongjiujiu', '/static/game/Human_avatar.png', 924, 1, 120, 130)

    // 巨剑侠
    this.game.load.image('yellow_giant_swordsman', '/static/game/Human_avatar.png', 820, 263, 120, 130)
    this.game.load.image('red_giant_swordsman', '/static/game/Human_avatar.png', 941, 132, 120, 130)
    this.game.load.image('green_giant_swordsman', '/static/game/Human_avatar.png', 1046, 1, 120, 130)
    this.game.load.image('blue_giant_swordsman', '/static/game/Human_avatar.png', 941, 262, 120, 130)

    // 学生
    this.game.load.image('green_student', '/static/game/Human_avatar.png', 1063, 132, 100, 130)
    this.game.load.image('blue_student', '/static/game/Human_avatar.png', 1168, 1, 100, 130)
    this.game.load.image('yellow_student', '/static/game/Human_avatar.png', 446, 401, 130, 100)
    this.game.load.image('red_student', '/static/game/Human_avatar.png', 576, 401, 130, 100)

    // 刀客
    this.game.load.image('yellow_assassin', '/static/game/Human_avatar.png', 1274, 1, 100, 130)
    this.game.load.image('red_assassin', '/static/game/Human_avatar.png', 1274, 132, 100, 130)
    this.game.load.image('green_assassin', '/static/game/Human_avatar.png', 1378, 260, 100, 130)
    this.game.load.image('blue_assassin', '/static/game/Human_avatar.png', 1378, 1, 100, 130)

    // 大刀手
    this.game.load.image('yellow_broadswordman', '/static/game/Human_avatar.png', 1379, 130, 100, 130)
    this.game.load.image('red_broadswordman', '/static/game/Human_avatar.png', 1485, 1, 100, 130)
    this.game.load.image('green_broadswordman', '/static/game/Human_avatar.png', 1484, 258, 100, 130)
    this.game.load.image('blue_broadswordman', '/static/game/Human_avatar.png', 1488, 129, 100, 130)

    // 剑士
    this.game.load.image('yellow_swordsman', '/static/game/Human_avatar.png', 1592, 1, 100, 130)
    this.game.load.image('red_swordsman', '/static/game/Human_avatar.png', 1591, 258, 100, 130)
    this.game.load.image('green_swordsman', '/static/game/Human_avatar.png', 1595, 129, 100, 130)
    this.game.load.image('blue_swordsman', '/static/game/Human_avatar.png', 1697, 1, 100, 130)

    // 武士
    this.game.load.image('yellow_warrior', '/static/game/Human_avatar.png', 1593, 386, 105, 120)
    this.game.load.image('red_warrior', '/static/game/Human_avatar.png', 1802, 1, 105, 120)
    this.game.load.image('green_warrior', '/static/game/Human_avatar.png', 1802, 124, 105, 120)
    this.game.load.image('blue_warrior', '/static/game/Human_avatar.png', 1802, 245, 105, 120)
 
    // 西部牛仔
    this.game.load.image('yellow_cowboy', '/static/game/Human_avatar.png', 131, 140, 115, 130)
    this.game.load.image('red_cowboy', '/static/game/Human_avatar.png', 131, 273, 115, 130)
    this.game.load.image('green_cowboy', '/static/game/Human_avatar.png', 249, 140, 115, 130)
    this.game.load.image('blue_cowboy', '/static/game/Human_avatar.png', 249, 273, 115, 130)

    // 书生
    this.game.load.image('yellow_scholar', '/static/game/Human_avatar.png', 1063, 261, 100, 130)
    this.game.load.image('red_scholar', '/static/game/Human_avatar.png', 1168, 261, 100, 130)
    this.game.load.image('green_scholar', '/static/game/Human_avatar.png', 1169, 131, 100, 130)
    this.game.load.image('blue_scholar', '/static/game/Human_avatar.png', 1273, 261, 100, 130)

    // 火铳手
    this.game.load.image('yellow_firecracker', '/static/game/Human_avatar.png', 196, 406, 125, 100)
    this.game.load.image('red_firecracker', '/static/game/Human_avatar.png', 321, 406, 125, 100)
    this.game.load.image('green_firecracker', '/static/game/Human_avatar.png', 1700, 129, 100, 125)
    this.game.load.image('blue_firecracker', '/static/game/Human_avatar.png', 1700, 254, 100, 125)

    // 小瓶子
    this.game.load.image('yellow_little_bottle', '/static/game/Human_avatar.png', 706, 397, 125, 110)
    this.game.load.image('red_little_bottle', '/static/game/Human_avatar.png', 831, 394, 125, 110)
    this.game.load.image('green_little_bottle', '/static/game/Human_avatar.png', 956, 393, 125, 110)
    this.game.load.image('blue_little_bottle', '/static/game/Human_avatar.png', 1701, 380, 110, 125)

    // 猫咪
    this.game.load.image('yellow_cat', '/static/game/Human_avatar.png', 1083, 392, 125, 110)
    this.game.load.image('red_cat', '/static/game/Human_avatar.png', 1211, 392, 125, 110)
    this.game.load.image('green_cat', '/static/game/Human_avatar.png', 1339, 392, 125, 110)
    this.game.load.image('blue_cat', '/static/game/Human_avatar.png', 1467, 389, 125, 110)
  }

  create() {
    const info = this.game.data.ctx_ele
    this.game.add.image('Stars_shine_brightly',0,0,info.width,info.height)
    this.game.add.entity(new StartBlock())
    this.game.add.entity(new StartBlock())
    this.game.add.entity(new StartBlock())
    this.game.add.entity(new StartBlock())
    this.game.add.entity(new StartBlock())
    this.game.add.entity(new StartBlock())
  }
  update(){

  }
}