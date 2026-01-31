import { Material_No } from './Mat_No';
import { Product } from './Product';

export interface Work {
  id: string;
  name: string;
  chars: string;
  tags: string[];
  notes: string;
}

export interface Product_Work {
  id: string;
  work: Work;
  product: Product;
  time: string;
  price: number;
}

export interface Tool_Work_List {
  product: Product;
  works: Tool_Work_List[];
}
