import { Material_No } from "./Mat_No";

export interface Work {
  id: string;
  name: string;
  chars: string;
  price: number ;
  time: number ;
  tags: string[];
  notes: string ;
}

export interface Product_Work{
  id:string;
  product:Material_No
}

export interface Tool_Work {
  work: Work;
  mat_no: Material_No;
  time: string ;
  price: number ;
}
