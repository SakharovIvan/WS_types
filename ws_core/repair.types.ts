export enum SPMATNO_TYPES {
  UNDEFINED,
  SPARE_PART,
  TOOL,
  ACCESSORY,
}

export interface Customer_LegalInfo {
  id?: string;
  gis_code: number;
  C1_code: string;
  organization_name: string;
  organization_INN: string;
  DSO_region: number;
  CliInfo_ID?: string;
  KPP: string;
  closed: boolean;
  updatedAt?: Date;
  createdAt?: Date;
}

export interface Customer_Shipment {
  id?: string;
  C1_code: string;
  Indeks?: string;
  city: string;
  addres: string;
  Tlf: string;
  email: string;
  transpport_company: string;
  closed: boolean;
  main: boolean;
  Customer_LegalInfo_id: string;
  createdAt?: Date;
  updatedat?: Date;
}

export interface Customer_Contract {
  id?: string;
  C1_code: string;
  name: string;
  contract_date: string;
  closed: boolean;
  type: SPMATNO_TYPES;
  main: boolean;
  Customer_LegalInfo_id?: string;
  createdAt?: Date;
  updatedat?: Date;
}

export interface Customer_Discount {
  id?: string;
  C1_code: string;
  discount: number;
  closed: boolean;
  contract_id: string;
  createdAt?: Date;
  updatedat?: Date;
}

export interface Customer_Bank {
  id?: string;
  Raschet_schet_bank: string;
  Korr_schet_bank: string;
  BIK_bank: string;
  Name_bank: string;
  Customer_LegalInfo_id: string;
  createdAt?: Date;
  updatedat?: Date;
}

export interface Customer_Info extends Customer_LegalInfo {
  Customer_Contract: Customer_Contract[];
  Customer_Bank: Customer_Bank[];
  Customer_Discount: Customer_Discount[];
  Customer_Shipment: Customer_Shipment[];
}
import { type Tool } from './product_repair.types';
export enum REPAIR_STATUS {
  DEFAULT,
  ACCEPTION,
  IN_WORK,
  APPROVED,
}
export interface Repair_Main_type {
  id: string;
  type: Repair_types;
  customer_id: string;
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

  cli_apprvoal?: boolean;
  cli_approval_in?: Date;
  cli_approval_out?: Date;

  completed?: Date;
  issued?: Date;
  visible?: boolean;
  customer_JSON?: Customer_Info;
  status: REPAIR_STATUS;
  closed?: boolean;
  closedAt?: Date;
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
  accepted_start: Date | null;
  accepted_end: Date | null;
  diagnosed_start: Date | null;
  diagnosed_end: Date | null;
  pending_in_start: Date | null;
  pending_in_end: Date | null;
  pending_out_start: Date | null;
  pending_out_end: Date | null;
  approval_in_start: Date | null;
  approval_in_end: Date | null;
  approval_out_start: Date | null;
  approval_out_end: Date | null;
  completed_start: Date | null;
  completed_end: Date | null;
  issued_start: Date | null;
  issued_end: Date | null;
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

export interface Repair_Period {
  id: string;
  repairs: Repair_Main_type[];
  date: Date;
  period: string;

  //what_asc
  customer_id: string;
  //main qty
  work_qty: number;
  mat_no_qty: number;
  repairs_qty: number;
  //sum main
  work_sum: number;
  mat_no_sum: number;
  sum: number;
  // NDS
  nds: number;
  // sum NDS
  work_sum_nds: number;
  mat_no_sum_nds: number;
  sum_nds: number;
  //sum WO NDS
  work_sum_wo_nds: number;
  mat_no_sum_wo_nds: number;
  sum_wo_nds: number;

  createdAt: Date;
  updatedAt: Date;
}

export enum BUH {
  NDS = 0.22,
}
