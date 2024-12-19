// h5音频控制器
export class AudioCol {
    audio: UniApp.InnerAudioContext;
    volume: number;
    constructor() {
        this.audio = uni.createInnerAudioContext();
        this.volume = 0
        this.audio.volume = this.volume;
    }
    play(src: string) {
        this.audio.src = src;
        this.audio.play();
    }
    /**
     * 循环播放
     */
    loopPlay(src: string) {
        this.audio.src = src;
        this.audio.loop = true;
        this.audio.play();
    }
     /**
     * 在规定时间内连续播放音频
     * @param {string} src - 音频信息标识符
     * @param {number} times - 播放次数
     * @param {number} interval - 两次播放之间的间隔时间（毫秒）
     */
    async playMultipleTimes(src: string, times: number, interval: number) {
        let self = this;
        // 定义一个函数来播放单次音频
        function playOnce() {
            let audio:UniNamespace.InnerAudioContext|null = uni.createInnerAudioContext();
			audio.src = src;
            audio.volume = self.volume;
            audio.play();
            // 在音频播放结束后销毁audio对象
            audio.onEnded = function() {
                audio?.pause();
				audio?.destroy();
                // 销毁audio对象
                audio = null;
            };
        }
    
        // 根据指定的次数循环播放音频
        function schedulePlay() {
            for (let i = 0; i < times; i++) {
                setTimeout(playOnce, i * interval);
            }
        }
    
        // 调用函数开始播放
        schedulePlay();
    }
}