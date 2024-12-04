<template>
	<view>
		<canvas style="width: 100vw;height: 100vh;" canvas-id="firstCanvas" id="firstCanvas"></canvas>
	</view>
</template>

<script>
	import { State } from '@/uni_modules/JJ-GSdk/js_sdk/sdk/state';
	import Main from './game/main'
	import { JJGame } from '@/uni_modules/JJ-GSdk/js_sdk/gameSdk';
	export default{
		data() {
			return {
				game:null
			}
		},
		onLoad() {
			this.$nextTick(()=>{
			    uni.createSelectorQuery().in(this).select('#firstCanvas').boundingClientRect((data) => {
					this.game = new JJGame(data)
					let state = new State(60)
					state.add('main', new Main(this.game))
					state.start('main')
				}).exec()
			})
			
		},
		methods: {

		}
	}
</script>

<style>

</style>
