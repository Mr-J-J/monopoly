import { ChessBoard } from "./controller/ChessBoard"
import { PlayerFactory } from "./controller/PlayerFactory"

export class Main {
    query: UniNamespace.SelectorQuery
    ChessBoard: ChessBoard
    PlayerFactory: PlayerFactory
    constructor(query: UniNamespace.SelectorQuery) {
        this.query = query
        this.ChessBoard = new ChessBoard(query)
        this.PlayerFactory = new PlayerFactory(3,query)
    }
    init(){
        //所有玩家放到开始位置
        this.PlayerFactory.moveAll(this.ChessBoard.lists[0])
        this.PlayerFactory.setNowPlayer(this.PlayerFactory.PlayerList[0])
        setTimeout(() => {
            this.PlayerFactory.NowPlayer.go(this.ChessBoard.lists[1])
        }, 2000);
    }
}