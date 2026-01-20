import { Repair_Main_type } from './repair.types';

export interface Tool {
  id: string;
  Mat_no_id: string;
  serial_number: string;
  serial_number_extra: string;
  checked: boolean;
  purchase: Date;
  manufacture: Date;
  //repairs: Repair_Main_type[];
  purchaser: Purchaser;
  seller: Seller;
  createdAt: Date;
  updatedAt: Date;
}

export interface Purchaser {
  id: string;
  name: string;
  tlf?: string;
  address?: string;
  user_id: string;
  inn: string;
  //tools: Tool[];
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Seller {
  id: string;
  name: string;
  //tools: Tool[];
  c1_code?: string;
  inn?: string;
  tlf?: string;
  person: boolean;
  createdAt: Date;
  updatedAt: Date;
}
