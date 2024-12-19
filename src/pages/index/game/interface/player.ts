export enum IPlayerRole {
  // 玩家
  Player = 'player',
  // 机器人
  Robot = 'robot',
}
export enum IPlayerStatus {
  // 开始|选定
  start = 'start',
  // 运行
  run = 'run',
  //执行事件
  eventing = 'eventing',
  // 停止
  stop = 'stop',
}
/**
 * 玩家皮肤素材对象
 */
export interface IPlayerSkin {
  Material: string;
  ScoreboardBg: string;
  ScoreBoardBorder: string;
}