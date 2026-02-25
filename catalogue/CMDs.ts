import { Mat_No_Analog, Material_No } from './Mat_No';
import { Product_Mat_No } from './Product';
import { Work } from './Work';

export enum CATALOGUE {
  MATERIAL,
  ANALOGUE,
  PRODUCT,
  PRODUCT_TYPE,
  PRODUCT_MAT_NO,
  SCHEME,
}

export enum CRUD {
  GET,
  SEARCH,
  UPSERT,
  DELETE,
  FULL_UPDATE,
}

export interface CATALOGUE_CMD {
  catalogue: CATALOGUE | string;
  crud: CRUD;
}

export interface material_commands {
  material_full_update(data: Partial<Material_No>[]): Promise<void>;
  material_upsert(data: Partial<Material_No>[]): Promise<void>;
  get_material(data: Partial<Material_No>): Promise<Material_No>;
  search_material(daata: string): Promise<Material_No>;

  get_analogue(data: Partial<Material_No>): Promise<Mat_No_Analog>;
  analogue_full_update(data: Partial<Mat_No_Analog>): Promise<void>;
  analogue_upsert(data: Partial<Mat_No_Analog>): Promise<void>;
}
export interface product_commands {
  update_mat_no(data: Omit<Product_Mat_No, 'id'>): Promise<void>;
  get_products;
}
export interface work_commands {
  full_update(data: Partial<Work>[]): Promise<void>;
  search(data: string): Promise<Work[]>;
  get(data: Partial<Work>): Promise<Work>;
  part_update(data: Partial<Work>): Promise<void>;
}

export interface Catalogue_ClientProxy {
  send(pattern: CATALOGUE_CMD, simulation: any): any;
  connect(): any;
  close(): any;
  routingMap(): any;
}
