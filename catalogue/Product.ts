import { Material_No } from './Mat_No';
import { Tool_Work_List } from './Work';

export interface Product {
  id: string;
  product: Material_No;
  type: Product_Type;
}

export interface Product_Mat_no extends Product {
  id: string;
  sp_mat_no: Material_No;
  qty: number;
}

export interface Product_Type {
  id: string;
  name: string;
}

export interface Product_Mat_No_List {
  product: Product;
  sp_mat_no_list: Product_Mat_no[];
}

export interface Scheme_data extends Product_Mat_No_List, Tool_Work_List {}
