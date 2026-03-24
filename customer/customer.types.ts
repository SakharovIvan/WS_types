import { Material_No_types } from '../catalogue/Mat_No';

export interface User_Customer {
  user_id: string;
  customer:Customer
}

export interface Customer {
  id: string;
  name: string;
  c1_code: string | null;
  inn: string;
  kpp: string | null;
  contacts: Contacts[];
  discounts: Discounts[];
  contracts: Contracts[];
  address: Address[];

}

export interface Contacts {
  id: string;
  main: boolean;
  name: string;
  notes: string | null;
  telephone: string | null;
  customer: Customer;
}

export interface Discounts {
  id: string;
  customer: Customer;
  contract: Contracts;
  closed: boolean;
  name: string | null;
  Material_No_type: Material_No_types;
  discount: number;
}

export interface Contracts {
  id: string;
  customer: Customer;
  discount: Discounts[];
  closed: boolean;
  name: string | null;
  date: Date;
  close_date: Date;
}

export interface Address {
  id: string;
  postal_code: string;
  city: string;
  type: Address_types;
  address: string;
  customer: Customer;
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
