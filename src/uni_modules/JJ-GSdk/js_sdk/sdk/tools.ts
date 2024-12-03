import { alignInfo, alignMode } from "../interface/tools";
import { Entity } from "../model/entity";
import { Data } from "./data";

export class Tools {
    data: Data
    constructor(data: Data) {
        this.data = data;        
    }
    /**
     * 对齐
     * @param { Entity[] } list 需要排列的实体列表
     * @param { alignMode } mode  对齐模式
     * @param { alignInfo } align 垂直对齐方式
     */
    align(list: Entity[],mode: alignMode, align: alignInfo) {
        if (list.length == 0) {
            return list;
        }
        // 水平对齐
        if (mode == alignMode.vertical) {
            if(align == alignInfo.start){
                let x = list[0].vector3.x;
                for (let i = 0; i < list.length; i++) {
                    let entity: Entity = list[i];
                    entity.vector3.y = list[0].vector3.y;
                    entity.vector3.x = x;
                    x += entity.vector3.width;
                }
            }
           
        } 
        
    }
    /**
     * 坐标换算
     * @param { number } number 坐标值
     * @param { (x|y) } type 坐标类型
     * @description
     * 所有换算均基于手机屏幕宽高为1080px，高度为1920px
     */
    coordinateTransform(number: number, type: string): number {
        let num = 0;
        if (type == 'x') {
            num = number / 1080 * this.data.ctx_ele.width;
        } else if (type == 'y') {
            num = number / 1920 * this.data.ctx_ele.height;
        }
        return num;
    }
}