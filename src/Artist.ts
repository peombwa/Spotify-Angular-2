import {Album} from './Album';

export interface Artist{
    id:number;
    name:string;
    genres:any;
    albums:Album[];
}