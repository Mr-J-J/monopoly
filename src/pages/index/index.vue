<template>
	<view class="body">
		<view class="desk">
			<view class="desk-top">
				<view id="game-block" class="big-block" :style="{'background': 'url('+game.ChessBoard.lists[6].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
				<view class="desk-top-center">
					<view class="desk-top-center-top">
						<view class="lite-block" id="lite-block-4" :style="{'background': 'url('+game.ChessBoard.lists[5].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-3" :style="{'background': 'url('+game.ChessBoard.lists[4].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="bus-block1" :style="{'background': 'url('+game.ChessBoard.lists[3].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-2" :style="{'background': 'url('+game.ChessBoard.lists[2].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-1" :style="{'background': 'url('+game.ChessBoard.lists[1].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
					</view>
					<view class="desk-top-center-bottom">
						<view class="ice" id="ice2" :style="{'background': 'url('+game.ChessBoard.lists[4].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="clearing" id="clearing1" :style="{'background': 'url('+game.ChessBoard.lists[3].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="ice" id="ice1" :style="{'background': 'url('+game.ChessBoard.lists[1].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
					</view>
				</view>
				<view id="start-block" class="big-block" :style="{'background': 'url('+game.ChessBoard.lists[0].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
			</view>
			<view class="desk-center">
				<view class="desk-center-left">
					<view class="desk-center-left-block">
						<view class="lite-block" id="lite-block-5" :style="{'background': 'url('+game.ChessBoard.lists[7].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-6" :style="{'background': 'url('+game.ChessBoard.lists[8].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="unknow-block-1" :style="{'background': 'url('+game.ChessBoard.lists[9].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-7" :style="{'background': 'url('+game.ChessBoard.lists[10].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="gift-block-1" :style="{'background': 'url('+game.ChessBoard.lists[11].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="bus-block2" :style="{'background': 'url('+game.ChessBoard.lists[12].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-8" :style="{'background': 'url('+game.ChessBoard.lists[13].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-9" :style="{'background': 'url('+game.ChessBoard.lists[14].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="unknow-block-2" :style="{'background': 'url('+game.ChessBoard.lists[15].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-10" :style="{'background': 'url('+game.ChessBoard.lists[16].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
					</view>
					<view class="desk-center-left-land">
						<view class="iceVertical" id="ice3" :style="{'background': 'url('+game.ChessBoard.lists[7].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="land" id="flower1" :style="{'background': 'url('+game.ChessBoard.lists[9].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="land" id="building1" :style="{'background': 'url('+game.ChessBoard.lists[10].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="land" id="money1" :style="{'background': 'url('+game.ChessBoard.lists[11].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="land" id="clearing2" :style="{'background': 'url('+game.ChessBoard.lists[12].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="iceVertical" id="ice4" :style="{'background': 'url('+game.ChessBoard.lists[13].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="land" id="money2" :style="{'background': 'url('+game.ChessBoard.lists[15].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="land" id="building2" :style="{'background': 'url('+game.ChessBoard.lists[16].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
					</view>
				</view>
				<view class="desk-center-center">
					<view class="screen" id="screen" :style="{'background': 'url('+game.ChessBoard.screen.Material+') no-repeat', 'background-size': '100% 100%'}">
						<template v-if="playerList&&playerList.length>0">
							<view class="sreen-item" v-for="(item,index) in playerList" :key="index" :id="'playerSreen'+index" :style="{'background': 'url('+item.SkinInfo.ScoreboardBg+') no-repeat', 'background-size': '100% 100%'}">
								<view class="avatar" :style="{'background': 'url('+item.avatar+') no-repeat', 'background-size': '100% 100%'}"></view>
								<view class="name">{{ item.name }}</view>
								<view class="money-icon"></view>
								<view class="money">{{ item.money }}</view>
								<view class="sreen-item-border"
									:style="{
										'background': 'url('+item.SkinInfo.ScoreBoardBorder+') no-repeat', 
										'background-size': '100% 100%',
										'opacity': item.Status=='stop'?'0':'1'
									}"
								></view>
								<view class="sreen-item-money-box">
									<view class="sreen-item-money"
									v-for="(item2,index2) in item.screen" :key="index2"
									:id="'screen'+index2+item.name"
									:style="{
										'transform': 'translateX('+item2.x+'px) translateY('+item2.y+'px)',
										'opacity': item2.opacity
									}"
									></view>
								</view>
							</view>
						</template>
					</view>
					<view class="tables" id="tables"  :style="{'background': 'url('+game.ChessBoard.tables.Material+') no-repeat', 'background-size': '100% 100%'}">
						<view class="randomCards" id="randomCards"></view>
						<view class="giftCards" id="giftCards"></view>
					</view>
					<view class="gameDesk" id="gameDesk" :style="{'background': 'url('+game.ChessBoard.gameDesk.Material+') no-repeat', 'background-size': '100% 100%'}">
						<view class="now-player" :style="{'background': 'url('+game.PlayerFactory.NowPlayer.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="sieve-cup" @click="game.dice()" :style="{
							'background': 'url('+game.ChessBoard.gameDesk.SieveCup.Material+') no-repeat', 
							'background-size': '100% 100%',
							'transition': 'all '+game.ChessBoard.gameDesk.SieveCup.duration+'s linear',
							'transform': 'scale('+game.ChessBoard.gameDesk.SieveCup.info.scale+')',
						}" id="sieveCup">
						</view>
					</view>
				</view>
				<view class="desk-center-right">
					<view class="desk-center-right-land">
						<view class="land" id="building4" :style="{'background': 'url('+game.ChessBoard.lists[33].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="land" id="flower3" :style="{'background': 'url('+game.ChessBoard.lists[32].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="iceVertical" id="ice8" :style="{'background': 'url('+game.ChessBoard.lists[30].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="land" id="money3" :style="{'background': 'url('+game.ChessBoard.lists[29].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="land" id="clearing4" :style="{'background': 'url('+game.ChessBoard.lists[28].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="land" id="building3" :style="{'background': 'url('+game.ChessBoard.lists[27].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="land" id="flower2" :style="{'background': 'url('+game.ChessBoard.lists[26].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="iceVertical" id="ice7" :style="{'background': 'url('+game.ChessBoard.lists[24].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
					</view>
					<view class="desk-center-right-block">
						<view class="lite-block" id="lite-block-20" :style="{'background': 'url('+game.ChessBoard.lists[33].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="gift-block-2" :style="{'background': 'url('+game.ChessBoard.lists[32].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-19" :style="{'background': 'url('+game.ChessBoard.lists[31].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-18" :style="{'background': 'url('+game.ChessBoard.lists[30].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="unknow-block-4" :style="{'background': 'url('+game.ChessBoard.lists[29].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="bus-block4" :style="{'background': 'url('+game.ChessBoard.lists[28].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-17" :style="{'background': 'url('+game.ChessBoard.lists[27].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="unknow-block-3" :style="{'background': 'url('+game.ChessBoard.lists[26].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-16" :style="{'background': 'url('+game.ChessBoard.lists[25].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-15" :style="{'background': 'url('+game.ChessBoard.lists[24].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
					</view>
				</view>
			</view>
			<view class="desk-top">
				<view id="blank-block" class="big-block" :style="{'background': 'url('+game.ChessBoard.lists[17].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
				<view class="desk-top-center">
					<view class="desk-top-center-bottom">
						<view class="ice" id="ice5" :style="{'background': 'url('+game.ChessBoard.lists[18].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="clearing" id="clearing3" :style="{'background': 'url('+game.ChessBoard.lists[20].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="ice" id="ice6" :style="{'background': 'url('+game.ChessBoard.lists[21].Land.Material+') no-repeat', 'background-size': '100% 100%'}"></view>
					</view>
					<view class="desk-top-center-top">
						<view class="lite-block" id="lite-block-11" :style="{'background': 'url('+game.ChessBoard.lists[18].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-12" :style="{'background': 'url('+game.ChessBoard.lists[19].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="bus-block3" :style="{'background': 'url('+game.ChessBoard.lists[20].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-13" :style="{'background': 'url('+game.ChessBoard.lists[21].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
						<view class="lite-block" id="lite-block-14" :style="{'background': 'url('+game.ChessBoard.lists[22].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
					</view>
				</view>
				<view id="prison-block" class="big-block" :style="{'background': 'url('+game.ChessBoard.lists[23].Material+') no-repeat', 'background-size': '100% 100%'}"></view>
			</view>
		</view>
		<view 
			class="player" 
			:id="'player'+index" 
			v-for="(item, index) in game.PlayerFactory.PlayerList" 
			:key="index" 
			:style="{
				'background': 'url('+item.Material+') no-repeat', 
				'background-size': '100% 100%',
				'z-index': item.info.Zindex,
				'transition': 'all '+item.duration+'s linear',
				'transform': 'translate('+item.info.x+'px, '+item.info.y+'px) scale('+item.info.scale+')',
				'transform-origin': 'center bottom',
				'opacity': item.info.x ? 1 : 0
				}"
		>
			<view class="name-title">{{ item.name }}</view>
		</view>
		<build-pop v-if="game.PlayerFactory.NowPlayer.block.UI.Name == 'build-pop'" :show="game.PlayerFactory.NowPlayer.block.UI.Show" :title="game.PlayerFactory.NowPlayer.block.Name" :money="game.PlayerFactory.NowPlayer.block.Land.money" @buy="buy" @cancel="cancel"></build-pop>
	</view>
</template>

<script>
	import { Main } from './game/main'
	import buildPop from './component/buildPop.vue'
	export default{
		data() {
			return {
				game: null,
				playerList: null
			}
		},
		components: {
		    buildPop
		},
		onLoad() {
			this.game = new Main(uni.createSelectorQuery().in(this))
			setTimeout(() => {
				this.$nextTick(()=>{
					this.game.init()
					this.playerList = this.game.PlayerFactory.PlayerList
					//强制刷新
					this.$forceUpdate()
				})
			}, 1000);
		},
		methods: {
			//buildPop
			buy() {
				this.game.PlayerFactory.NowPlayer.buyBuild()
				setTimeout(() => {
					this.game.PlayerFactory.NowPlayer.block.UI.Show = false
				}, 500);
			},
			//buildPop
			cancel() {
				setTimeout(() => {
					this.game.PlayerFactory.NowPlayer.block.UI.Show = false
				}, 500);
			}
		}
	}
</script>

<style scoped>
.body{
    width: 100vw;
    height: 100vh;
	background: url('@/static/game/Polite.png') no-repeat;
	background-size: 100% 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.desk{
	width: 90vw;
	height: 70vh;
}
.desk-top{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.desk-center{
	display: flex;
	justify-content: space-between;
}
.desk-center-left,.desk-center-right{
	display: flex;
}
.desk-center-left-block{
	margin-right: 4rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.desk-center-right-block{
	margin-left: 4rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.desk-center-left-land,.desk-center-right-land{
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.block{
	background-size: 100% 100%;
}
.big-block{
    width: 150rpx;
	height: 150rpx;
}
.desk-top-center{
	display: flex;
    width: 54%;
    justify-content: space-between;
	flex-direction: column;
}
.desk-top-center-top{
	width: 100%;
	height: 50%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 4rpx;
}
.lite-block{
	width: 70rpx;
	height: 80rpx;
}
.desk-top-center-bottom{
	width: 100%;
	height: 50%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
}
.clearing,.land{
	width: 65rpx;
	height: 70rpx;
	margin: 5rpx;
}
.ice{
	width: 150rpx;
	height: 70rpx;
}
.iceVertical{
	width: 70rpx;
	height: 160rpx;
}





.desk-center-center{
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.screen{
	margin-top: 10rpx;
	width: 350rpx;
	height: 250rpx;
	display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
	padding-top: 10rpx;
}
.tables{
	margin-top: 5rpx;
	width: 370rpx;
	height: 250rpx;
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
}
.gameDesk{
	margin-top: 20rpx;
	width: 330rpx;
	height: 250rpx;
	position: relative;
}
.sieve-cup{
	height: 120rpx;
	width: 110rpx;
	position: absolute;
	right: 30rpx;
	bottom: 60rpx;
	z-index: 1;
}
.now-player{
	height: 150rpx;
	width: 120rpx;
	position: absolute;
	left: 10rpx;
	top: 10rpx;
}
.randomCards{
	height: 240rpx;
	width: 150rpx;
	background-image: url('https://btxgdqn.oliyuno.com/dafuweng/random_rewards/ask_card.png');
	background-size: 100% 100%;
}
.giftCards{
	height: 240rpx;
	width: 150rpx;
	background-image: url('https://btxgdqn.oliyuno.com/dafuweng/random_rewards/prize_card.png');
	background-size: 100% 100%;
}


.playerFactory{
	position: absolute;
	top: 0 rpx;
	left: 0 rpx
}
.player{
	height: 150rpx;
	width: 120rpx;
	position: absolute;
	left: 0;
	top: 0;
	
}
.name-title{
	opacity: 0.8;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    border-radius: 25rpx;
}

.sreen-item{
	width: 80%;
	height: 30rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10rpx;
	position: relative;
}
.sreen-item-border{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 120%;
	animation: scale 1s infinite;
}
.avatar{
	width: 30rpx;
	height: 30rpx;
	border-radius: 50%;
}
.name{
	background: rgba(0, 0, 0, 0.437);
	color: white;
	border-radius: 25rpx;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18rpx;
	height: 100%;
	width: 40%;
}
.money{
	background: rgba(0, 0, 0, 0.437);
	color: white;
	border-radius: 25rpx;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18rpx;
	height: 100%;
	width: 40%;
}
.money-icon{
	width: 25rpx;
	height: 30rpx;
	background: url('/static/game/matching_list/money_icon.png') no-repeat;
	background-size: 100% 100%;
}
.sreen-item-money-box{
	width: 100%;
	display: flex;
	justify-content: center;
	position: absolute;
}
.sreen-item-money{
	background: rgba(0, 0, 0, 0.437);
	background-size: 100% 100%;
	width: 100rpx;
	height: 100rpx;
	transition: all 0.2s linear;
	position: absolute;
	left: 0rpx;
	top: 0rpx;
}

@keyframes scale {
    0% {
        transform: scale(1.1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1.1);
    }
}
</style>
