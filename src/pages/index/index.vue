<template>
	<view>
		<canvas style="width: 100vw;height: 100vh;" canvas-id="firstCanvas" id="firstCanvas"></canvas>
	</view>
</template>

<script>
	import Main from './game/main.js'
	import { JJGame } from '@/uni_modules/JJ-GSdk/js_sdk/gameSdk';
	export default{
		data() {
			return {
				game:null
			}
		},
		onLoad() {
			this.game = new JJGame(uni.createCanvasContext('firstCanvas'))
			this.game.state.add('main', new Main())
			this.game.state.start('main')
		},
		methods: {

		}
	}
</script>

<style>

</style>
