import { Material_No } from './Mat_No';
import { Tool_Work_List, Work } from './Work';

export interface Product {
  id: string;
  product: string;
  type: number;
}

export interface Product_Mat_No {
  id: string;
  product: string;
  sp_mat_no: string;
  qty: number;
}

export interface Product_Type {
  id: string;
  code: number;
  name: string;
}

export interface Scheme_data extends Tool_Work_List {
  sp_mat_no_list: Product_Mat_No[];

  attachment?: [];
}

export interface Product_Work {
  id: string;
  work: number;
  product: string;
  time: number;
  price: number;
}

export interface Product_update {
  product: string;
  type: number;
  sp_mat_no_list: { sp_mat_no: string; qty: number }[];
  work_list: { code: number; time?: number; price?: number }[];
}
