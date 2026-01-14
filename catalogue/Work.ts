export interface Work {
  id: string;
  name: string;
  chars: string | null;
  price: number | null;
  time: number | null;
  tags: string[];
  notes: string | null;
}
