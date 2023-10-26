import { Tag } from "./Tag";

export interface Project{
 id:number;
 name : string;
 discription : string;
 summary:string;
 tags:Tag[];
 picture : string[];
 projectLink:string;
}