export interface Material_No {
  id: string;
  mat_no: string;
  name: string;
  chars: string ;
  price: number;
  tags: string[];
  notes: string ;
  type: Material_No_types;
}

export interface Product_Mat_no{
  id:string
  product:Material_No;
  sp_mat_no:Material_No;
  qty:number;

}
export interface Product_Mat_No_List{
  product:Material_No;
  sp_mat_no_list:Product_Mat_no[]
}

export interface Scheme_data extends Produst_Mat_No_List & {
  works:Work
}
export enum Material_No_types {
  Spare_part,
  Product,
  Accessories,
}
