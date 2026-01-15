export interface Work {
  id: string;
  name: string;
  chars: string | null;
  price: number | null;
  time: number | null;
  tags: string[];
  notes: string | null;
}

export interface Tool_Work {
  work_id: string;
  mat_no_id: string;
  time: string | null;
  price: number | null;
}
