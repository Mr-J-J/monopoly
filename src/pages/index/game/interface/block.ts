import { Material } from '@/uni_modules/JJ-GSdk/js_sdk/interface/resource'
export enum BlockStatus {
    on = 'on', //被踩中
    off = 'off',//未被踩中
}
export interface StatusMaterial {
    'on' : Material,
    'off' : Material,
}