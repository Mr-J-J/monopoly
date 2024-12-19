import { Block } from "../baseModel/block"
import { IPlayerRole } from "../interface/player"
import { BlankBlock } from "../model/block/blankBlock"
import { BusBlock } from "../model/block/busBlock"
import { GameBlock } from "../model/block/gameBlock"
import { GiftBlock } from "../model/block/giftBlock"
import { LiteBlock1 } from "../model/block/liteBlock1"
import { LiteBlock10 } from "../model/block/liteBlock10"
import { LiteBlock11 } from "../model/block/liteBlock11"
import { LiteBlock12 } from "../model/block/liteBlock12"
import { LiteBlock13 } from "../model/block/liteBlock13"
import { LiteBlock14 } from "../model/block/liteBlock14"
import { LiteBlock15 } from "../model/block/liteBlock15"
import { LiteBlock16 } from "../model/block/liteBlock16"
import { LiteBlock17 } from "../model/block/liteBlock17"
import { LiteBlock18 } from "../model/block/liteBlock18"
import { LiteBlock19 } from "../model/block/liteBlock19"
import { LiteBlock2 } from "../model/block/liteBlock2"
import { LiteBlock20 } from "../model/block/liteBlock20"
import { LiteBlock3 } from "../model/block/liteBlock3"
import { LiteBlock4 } from "../model/block/liteBlock4"
import { LiteBlock5 } from "../model/block/liteBlock5"
import { LiteBlock6 } from "../model/block/liteBlock6"
import { LiteBlock7 } from "../model/block/liteBlock7"
import { LiteBlock8 } from "../model/block/liteBlock8"
import { LiteBlock9 } from "../model/block/liteBlock9"
import { PrisonBlock } from "../model/block/prisonBlock"
import { StartBlock } from "../model/block/startBlock"
import { UnknowBlock } from "../model/block/unknowBlock"
import { GameDesk } from "../model/desk/gameDesk"
import { Screen } from "../model/desk/screen"
import { Tables } from "../model/desk/tables"
import { Building } from "../model/land/building"
import { Clearing } from "../model/land/clearing"
import { Flower } from "../model/land/flower"
import { Ice } from "../model/land/ice"
import { IceVertical } from "../model/land/iceVertical"
import { Money } from "../model/land/money"
import { Player } from "../model/player/player"
import { AudioCol } from "./Audio"
import { PlayerFactory } from "./PlayerFactory"

/**
 * 棋盘控制器
 */
export class ChessBoard {
    query: UniNamespace.SelectorQuery
    lists: Block[] = []
    screen: Screen;
    tables: Tables;
    gameDesk: GameDesk;
    PlayerFactory: PlayerFactory
    Audio: AudioCol
    constructor(PlayerFactory: PlayerFactory,audio: AudioCol,query: UniNamespace.SelectorQuery) {
        this.query = query
        this.Audio = audio
        this.PlayerFactory = PlayerFactory
        this.screen = new Screen('screen',this.query)
        this.tables = new Tables('tables',this.query)
        this.gameDesk = new GameDesk('gameDesk',this.PlayerFactory,this.Audio,this.query)
        
        this.init()
    }
    init() {
        
        const ice1 = new Ice('ice1',this.query)
        const ice2 = new Ice('ice2',this.query)
        const ice3 = new IceVertical('ice3',this.query)
        const ice4 = new IceVertical('ice4',this.query)
        const ice5 = new Ice('ice5',this.query)
        const ice6 = new Ice('ice6',this.query)
        const ice7 = new IceVertical('ice7',this.query)
        const ice8 = new IceVertical('ice8',this.query)
        const clearing1 = new Clearing('clearing1',this.query)
        const clearing2 = new Clearing('clearing2',this.query)
        const clearing3 = new Clearing('clearing3',this.query)
        const clearing4 = new Clearing('clearing4',this.query)
        const flower1 = new Flower('flower1',this.query)
        const flower2 = new Flower('flower2',this.query)
        const flower3 = new Flower('flower3',this.query)
        const building1 = new Building('building1',this.query)
        const building2 = new Building('building2',this.query)
        const building3 = new Building('building3',this.query)
        const building4 = new Building('building4',this.query)
        const money1 = new Money('money1',this.query)
        const money2 = new Money('money2',this.query)
        const money3 = new Money('money3',this.query)
        //上部分
        this.lists.push(new StartBlock(this.query))
        this.lists.push(new LiteBlock1(ice1,this.query))
        this.lists.push(new LiteBlock2(ice1,this.query))
        this.lists.push(new BusBlock('bus-block1',clearing1,this.query))
        this.lists.push(new LiteBlock3(ice2,this.query))
        this.lists.push(new LiteBlock4(ice2,this.query))
        this.lists.push(new GameBlock(this.query))
        //中间左面部分
        this.lists.push(new LiteBlock5(ice3,this.query))
        this.lists.push(new LiteBlock6(ice3,this.query))
        this.lists.push(new UnknowBlock('unknow-block-1',flower1,this.query))
        this.lists.push(new LiteBlock7(building1,this.query))
        this.lists.push(new GiftBlock('gift-block-1',money1,this.query))
        this.lists.push(new BusBlock('bus-block2',clearing2,this.query))
        this.lists.push(new LiteBlock8(ice4,this.query))
        this.lists.push(new LiteBlock9(ice4,this.query))
        this.lists.push(new UnknowBlock('unknow-block-2',money2,this.query))
        this.lists.push(new LiteBlock10(building2,this.query))
        //下部分
        this.lists.push(new BlankBlock(this.query))
        this.lists.push(new LiteBlock11(ice5,this.query))
        this.lists.push(new LiteBlock12(ice5,this.query))
        this.lists.push(new BusBlock('bus-block3',clearing3,this.query))
        this.lists.push(new LiteBlock13(ice6,this.query))
        this.lists.push(new LiteBlock14(ice6,this.query))
        this.lists.push(new PrisonBlock(this.query))
        //中间右面部分
        this.lists.push(new LiteBlock15(ice7,this.query))
        this.lists.push(new LiteBlock16(ice7,this.query))
        this.lists.push(new UnknowBlock('unknow-block-3',flower2,this.query))
        this.lists.push(new LiteBlock17(building3,this.query))
        this.lists.push(new BusBlock('bus-block4',clearing4,this.query))
        this.lists.push(new LiteBlock18(ice8,this.query))
        this.lists.push(new LiteBlock19(ice8,this.query))
        this.lists.push(new UnknowBlock('unknow-block-4',money3,this.query))
        this.lists.push(new GiftBlock('gift-block-3',flower3,this.query))
        this.lists.push(new LiteBlock20(building4,this.query))
    }
    /**
     * 设置当前的玩家
     */
    setPlayer(player:Player){
        this.PlayerFactory.setNowPlayer(player)
        if(player.role == IPlayerRole.Player){
            this.gameDesk.SieveCup.start()
        }
    }
    /**
     * 切换玩家
     */
    handoffPlayer(){
        // 下一个玩家
        const nextPlayer = this.PlayerFactory.getNextPlayer()
        this.setPlayer(nextPlayer)
    }
    /**
     * 掷筛中
     */
    async throwSieveCup(){
       const num = await this.gameDesk.throwSieveCup()
       await this.movePlayer(num)
    }
    /**
     * 玩家在棋盘上移动
     */
    async movePlayer(num:number){
        // 查询当前玩家所在位置
        let nowNum = 0
       for(let i = 0;i < this.lists.length;i++){
        if(this.PlayerFactory.NowPlayer.block == this.lists[i]){
            nowNum = i
            break
        }
       }
       // 移动
       for(let i = 0;i < num;i++){
        if(this.PlayerFactory.NowPlayer.isForward){
            nowNum++
        }else{
            nowNum--
        }
        if(nowNum >= this.lists.length){
            nowNum = 0
        }
        await this.PlayerFactory.NowPlayer.go(this.lists[nowNum])
       }
       // 执行玩家当前格子的功能
       await this.PlayerFactory.NowPlayer.runEvent()
    }
}