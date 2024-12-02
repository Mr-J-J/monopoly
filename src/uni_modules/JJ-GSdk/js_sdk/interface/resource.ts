export interface Resource {
    images:Record<string, Material>
}
export interface Material{
    path:string
    x:number
    y:number
    width:number
    height:number
}
export class Material implements Material{
    path:string
    x:number
    y:number
    width:number
    height:number
    constructor(path:string,x:number,y:number,width:number,height:number){
        this.path = path
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
}
