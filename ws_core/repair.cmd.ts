import { Purchaser, Seller, Tool } from './product_repair.types';
import { Repair_Main_type, Repair_types } from './repair.types';

export enum WS_CMD {
  create_new,
  update_repair,
  delete_repair,
  get_repair_list,
  repair_sample,
  get_repair_data,
  nomenclature_get_purchasers,
  nomenclature_upsert_purchaser,
  nomenclature_get_sellers,
  nomenclature_upsert_seller,
  tool_create,
  tool_search_upsert,
  tool_update,
  get_types,
  find_type,
  create_type,
}

export interface WS_REPAIR_FUNC {
  create_new_repair(data: {
    user_id: string;
    repair: Repair_Main_type;
  }): Promise<any>;
  update_repair(data: { user_id: string; repair: Repair_Main_type });
  get_repair_list(data: { user_id: string; repair: Repair_Main_type });
}

export interface WS_NOMENCLATURE_FUNC {
  get_sellers(data: Partial<Seller>): Promise<Seller[] | null>;
  get_purchasers(data: Partial<Purchaser>): Promise<Purchaser[] | null>;
  upsert_seller(data: Seller): Promise<Seller>;
  upsert_purchaser(data: Purchaser): Promise<Purchaser>;
}

export interface WS_TOOL_FUNC {
  create(data: Partial<Tool>): Promise<Tool>;
  search(data: Partial<Tool>, create?: boolean): Promise<Tool[] | null>;
  update(data: { current_tool_id: string; data: Partial<Tool> });
}

export interface WS_REPAIR_TYPE_FUNC {
  getTypes(): Promise<Repair_types[]>;
  findType(data: Partial<Repair_types>): Promise<Repair_types>;
  createType(data: Omit<Repair_types, 'id'>): Promise<void>;
}

export interface WS_CORE_FUNCs
  extends
    WS_REPAIR_FUNC,
    WS_NOMENCLATURE_FUNC,
    WS_TOOL_FUNC,
    WS_REPAIR_TYPE_FUNC {}

export interface WS_CORE_ClientProxy {
  send(pattern: WS_CMD, simulation: any): any;
  connect(): any;
  close(): any;
  routingMap(): any;
}
