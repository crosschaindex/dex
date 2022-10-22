import { Connection } from "mongoose";

export const thisIsAModule = true;

declare global {
  var mongoose: any;
  var tronWeb:any
}
