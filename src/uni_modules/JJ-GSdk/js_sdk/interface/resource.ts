export interface Resource {
    images:Record<string, Material>
}
export interface Material{
    path:string
    x:number
    y:number
    width:number
    height:number
    type:string
}
export class Material implements Material{
    path:string
    x:number
    y:number
    width:number
    height:number
    type:string
    attribute: any
    constructor(path:string,x:number,y:number,width:number,height:number,type:string = 'image', attribute:any = {}){
        this.path = path
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.type = type
        this.attribute = attribute
    }
}
