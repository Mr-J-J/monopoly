import { AudioCol } from "./controller/Audio"
import { ChessBoard } from "./controller/ChessBoard"
import { PlayerFactory } from "./controller/PlayerFactory"
import { sleep } from "./tools/tools"

export class Main {
    query: UniNamespace.SelectorQuery
    ChessBoard: ChessBoard
    PlayerFactory: PlayerFactory
    Audio: AudioCol
    constructor(query: UniNamespace.SelectorQuery) {
        this.query = query
        this.Audio = new AudioCol()
        this.Audio.loopPlay('/static/game/music/bg.m4a')
        this.PlayerFactory = new PlayerFactory(3,this.Audio,query)
        this.ChessBoard = new ChessBoard(this.PlayerFactory,this.Audio,query)
        
    }
    async init(){
        //所有玩家放到开始位置
        this.PlayerFactory.moveAll(this.ChessBoard.lists[0])
        this.ChessBoard.setPlayer(this.PlayerFactory.PlayerList[0])
        await sleep(2000)
        // await this.PlayerFactory.NowPlayer.go(this.ChessBoard.lists[1])
    }
    //点击投筛盅
    async dice(){
        if(this.PlayerFactory.NowPlayer.role != 'player'){
            return
        }
        await this.ChessBoard.throwSieveCup()

    }
}