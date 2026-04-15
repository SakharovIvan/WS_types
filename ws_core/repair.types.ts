import { type Tool } from './product_repair.types';

export interface Repair_Main_type {
  id: string;
  type: Repair_types;

  code: string;
  user_id: string;
  tool: Tool;
  //purchaser: Purchaser;
  parts?: Repair_Mat_No[];
  works?: Repair_Work[];
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

export interface Repair_dates_filter {
  accepted_start: Date;
  accepted_end: Date;
  diagnosed_start: Date;
  diagnosed_end: Date;
  pending_in_start: Date;
  pending_in_end: Date;
  pending_out_start: Date;
  pending_out_end: Date;
  approval_in_start: Date;
  approval_in_end: Date;
  approval_out_start: Date;
  approval_out_end: Date;
  completed_start: Date;
  completed_end: Date;
  issued_start: Date;
  issued_end: Date;
}

export interface Repair_Main_type_filter
  extends Repair_Main_type, Repair_dates_filter {}

export interface Repair_Mat_No {
  mat_No_id: string;
  qty: number;
  price: number;
  approved?: boolean;
  used?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Repair_Work {
  repair?: Repair_Main_type;
  work_id: string;
  price: number;
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
