import { Purchaser, Seller, Tool } from './product_repair.types';

export interface Repair_Main_type {
  id: string;
  type: Repair_types;

  code: string;
  user_id: string;
  tool: Tool;
  //purchaser: Purchaser;
  parts: Repair_Mat_No[];
  works: Repair_Work[];
  accepted: Date;
  diagnosed?: Date;
  pending?: boolean;
  pending_in?: Date;
  pending_out?: Date;
  apprvoal?: boolean;
  approval_in?: Date;
  approval_out?: Date;
  completed?: Date;
  issued?: Date;
  visible?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}

export enum Repair_dates {
  accepted,
  diagnosed,
  pending_in,
  pending_out,
  approval_in,
  approval_out,
  completed,
  issued,
}

export interface Repair_Mat_No {
  //repair: Repair_Main_type;
  mat_No_id;
  qty: number;
  price: number;
  approved?: boolean;
  used?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Repair_Work {
  repair: Repair_Main_type;
  work_id: string;
}

export interface Repair_types {
  id?: string;
  name: string;
  //repairs: Repair_Main_type[];
  sp: boolean;
  work: boolean;
  options: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Repair_options {}
