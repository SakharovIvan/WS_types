export interface Repair_Main_type {
  id: string;
  type: string;

  tool_id: string;
  purchaser_id: string;
  seller_id: string;
  user_id: string;

  accepted: Date;
  diagnosed: Date | null;
  pending: boolean;
  pending_in: Date | null;
  pending_out: Date | null;
  apprvoal: boolean;
  approval_in: Date | null;
  approval_out: Date | null;
  completed: Date | null;
  issued: Date | null;

  createdAt: Date;
  updatedAt: Date;
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
  repair_id: string;
  mat_No_id;
  qty: number;
  price: number;
  approved: boolean;
  used: boolean;
}

export interface Repair_Work {
  repair_id: string;
  work_id: string;
}

export interface Repair_types {
  id: string;
  name: string;
  sp: boolean;
  work: boolean;
  options: number | null;
}

export interface Repair_options {}
