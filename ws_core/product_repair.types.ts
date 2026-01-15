export interface Tool {
  id: string;
  Mat_no_id: string;
  serial_number: string;
  serial_number_extra: string;
  checked: boolean;
  purchase: Date;
  manufacture: Date;
  Purchaser_id: string;
  seller_id: string;
}

export interface Purchaser {
  id: string;
  name: string;
  tlf: string | null;
  address: string | null;
  notes: string | null;
}

export interface Seller {
  id: string;
  name: string;
  c1_code: string | null;
  inn: string | null;
  tlf: string | null;
  person: boolean;
}
