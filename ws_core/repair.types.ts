export interface Repair {
  id: string;

  accepted: Date;

  diagnosed: Date;
  pending: boolean;
  pending_in: Date;
  pending_out: Date;
  apprvoal: boolean;
  approval_in: Date;
  approval_out: Date;

  completed: Date;
  issued: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Repair_Mat_No {
  repair_id: string;
  mat_No_id;
}

export interface Repair_Work {
  repair_id: string;
  work_id: string;
}

export interface Repair_types {
  id: number;
  name: string;
  sp: boolean;
  work: boolean;
  options: number | null;
}

export interface Repair_options {}
