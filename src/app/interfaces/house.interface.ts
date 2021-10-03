import { Status } from "../enums/status";
import { Address } from "./address.interface";

export interface IHouse {
  id: number;
  price: number;
  surface: number;
  address: Array<Address>;
}