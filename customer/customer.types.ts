import { Material_No_types } from '../catalogue/Mat_No';

export interface Customer {
  id: string;
  name: string;
  c1_code: string | null;
  inn: string;
  kpp: string | null;
}

export interface Contacts {
  id: string;
  main: boolean;
  name: string;
  notes: string | null;
  telephone: string | null;
}

export interface Discounts {
  id: string;
  customer_id: string;
  contract_id: string;
  closed: boolean;
  name: string | null;
  Material_No_type: Material_No_types;
  discount: number;
}

export interface Contracts {
  id: string;
  closed: boolean;
  name: string | null;
  date: Date;
  close_date: Date;
}

export interface Address {
  id: string;
  city_id: string;
  type: Address_types;
  address: string;
  indeks;
}

export interface Cities {
  id: string;
  name: string;
  region: string;
}

export enum Address_types {
  Legal,
  Delivery,
  Fact,
}
