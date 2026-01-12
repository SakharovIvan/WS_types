export interface Material_No {
  id: string;
  mat_no: string;
  name: string;
  chars: string | null;
  price: number;
  tags: string[];
  notes: string | null;
  type: Material_No_types;
}

export enum Material_No_types {
  Spare_part,
  Product,
  Accessories,
}
