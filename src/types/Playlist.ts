import { SongType } from "./Song";

export interface PlaylistType {
  _id?:string;
  name:string;
  description:string;
  genre:string;
  img:string;
  songs:Array<SongType>;

  // isOn?:boolean;
  // _id?:string;
  //   url:string
  // title:string;
  // description:string;
  }