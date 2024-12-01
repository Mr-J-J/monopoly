import { Resource } from "../interface/resource";

export class Data{
    resource: Resource
    constructor(){
        this.resource = {
            images: {},
        }
    }
}