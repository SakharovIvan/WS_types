
export interface Product {
  id: string;
  product: string; //Material_No.mat_no
  type: number; // Product_Type.code
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

export interface Scheme_data {
  sp_mat_no_list: Product_Mat_No[] | null;
  works: Product_Work[] | null;
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
  type?: number;
  sp_mat_no_list?: { sp_mat_no: string; qty: number }[];
  work_list?: { code: number; time?: number; price?: number }[];
}

export interface Product_update_result extends Product_update {
  error_List:
    | {
        sp_mat_no_list: { sp_mat_no: string; qty: number; message: string }[];
        work_list: {
          code: number;
          time?: number;
          price?: number;
          message: string;
        }[];
      }
    | {};
}

export const undefined_type: Omit<Product_Type, 'id'> = {
  code: 1,
  name: 'Тип не опрделен',
};
