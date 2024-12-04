import { Material } from '@/uni_modules/JJ-GSdk/js_sdk/interface/resource'
export enum BlockStatus {
    on = 'on',
    off = 'off',
}
export interface StatusMaterial {
    'on' : Material,
    'off' : Material,
}