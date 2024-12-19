<template>
    <view v-if="show" class="body">
        <view class="bg">
            <view class="bg-title">
                <image class="bg-title-image" :src="titleSrcList[title]" mode="aspectFit">
                </image>
            </view>
            <view class="bg-content">
                <view class="bg-content-font">
                    <view class="bg-content-font-title">
                        <view>该区域代售中，你想以</view>
                        <view class="bg-content-font-title-money">
                            <view class="bg-content-font-money">{{ money }}</view>
                            买下来?
                        </view>
                    </view>
                </view>
                <view class="bg-content-buttons">
                    <view class="bg-content-button-buy" :class="{'bg-content-button-buy-active':isClickBuy}" @click="buy"></view>
                    <view class="bg-content-button-cancel" @click="cancel"></view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {
            isClickBuy: false,
            titleSrcList:{
                '大新花园':'https://btxgdqn.oliyuno.com/dafuweng/UI/bigFlowerPack.png',
                '博物馆':'https://btxgdqn.oliyuno.com/dafuweng/UI/bowuguan.png',
                '会展中心':'https://btxgdqn.oliyuno.com/dafuweng/UI/cityCenter.png',
                '锦绣公园':'https://btxgdqn.oliyuno.com/dafuweng/UI/flowerPack.png',
                '福星街':'https://btxgdqn.oliyuno.com/dafuweng/UI/fuxingjie.png',
                '和平路':'https://btxgdqn.oliyuno.com/dafuweng/UI/hepinglu.png',
                '华侨城':'https://btxgdqn.oliyuno.com/dafuweng/UI/huaqiaocheng.png',
                '解放路':'https://btxgdqn.oliyuno.com/dafuweng/UI/jiefanglu.png',
                '罗湖公园':'https://btxgdqn.oliyuno.com/dafuweng/UI/LakePack.png',
                '莲花村':'https://btxgdqn.oliyuno.com/dafuweng/UI/lianhuacun.png',
                '图书馆':'https://btxgdqn.oliyuno.com/dafuweng/UI/library.png',
                '南海湾':'https://btxgdqn.oliyuno.com/dafuweng/UI/nanluowan.png',
                '人民公园':'https://btxgdqn.oliyuno.com/dafuweng/UI/PeoplesSquare.png',
                '海滨沙滩':'https://btxgdqn.oliyuno.com/dafuweng/UI/SeasideSandyBbeach.png',
                '深南大道':'https://btxgdqn.oliyuno.com/dafuweng/UI/shennandadao.png',
                '世界之窗':'https://btxgdqn.oliyuno.com/dafuweng/UI/wordWindow.png',
                '动物园':'https://btxgdqn.oliyuno.com/dafuweng/UI/zoo.png'
            }
        }
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title:{
            type: String,
            default: '大新花园'
        },
        money:{
            type: Number,
            default: 100
        }
    },
    methods: {
        buy() {
            this.isClickBuy = true
            this.$emit('buy')
        },
        cancel() {
            this.$emit('cancel')
        },
        open() {
            this.show = true
        }
    }
}
</script>
<style scoped>
.body {
    width: 100vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0rpx;
    top: 0rpx;
    z-index: 9
}
.bg {
    width: 500rpx;
    height: 450rpx;
    background: url('/static/game/UI/buildPop.png') no-repeat;
    background-size: 100% 100%;
}
.bg-title {
    width: 100%;
    height: 85rpx;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bg-title-image {
    height: 65rpx;
}
.bg-content {
    width: 100%;
    height: 366rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10rpx;
}
.bg-content-font{
    width: 100%;
    height: 200rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20rpx;
}
.bg-content-buttons{
    width: 90%;
    height: 166rpx;
    display: flex;
    justify-content: space-around;
    align-items: start;
    margin-top: 30rpx;
}
.bg-content-button-buy{
    width: 170rpx;
    height: 75rpx;
    background: url('/static/game/UI/text_buy.png') no-repeat;
    background-size: 100% 100%;
    transition: all 0.2s linear;
}
.bg-content-button-buy-active{
    transform: scale(1.2);
    transition: all 0.2s linear;
}
.bg-content-button-cancel{
    width: 170rpx;
    height: 75rpx;
    background: url('/static/game/UI/text_fangqi.png') no-repeat;
    background-size: 100% 100%;
}
.bg-content-font-title{
    display: flex;
    width: 390rpx;
    flex-wrap: wrap;
    color: white;
    font-family: cursive;
    font-weight: bold;
    font-size: 39rpx;
    justify-content: center;
}
.bg-content-font-money{
    font-size: 50rpx;
}
.bg-content-font-title-money{
    display: flex;
    align-items: flex-end;
}
.bg-content-font-money{
    color: yellowgreen;
    margin: 0 10rpx;
}
</style>