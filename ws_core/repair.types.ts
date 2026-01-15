export interface Repair_type {
  id: string;
  type: string;

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
