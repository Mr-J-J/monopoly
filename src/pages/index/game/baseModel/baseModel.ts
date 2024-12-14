import { IBaseModel } from "../interface/baseModel";

export class BaseModel {
    info: IBaseModel = {} as IBaseModel;
    getCenter(){
        return {
            x: this.info.left + this.info.width / 2,
            y: this.info.top + this.info.height / 2
        }
    }
    destroy() {
        // 销毁
    }
}