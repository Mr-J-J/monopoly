export interface Resource {
    images:Record<string, Image>
}
interface Image{
    path:string
    x:number
    y:number
    width:number
    height:number
}