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

export interface Discounts {}

export interface Contracts {}

export interface Address {
  id: string;
  city: string;
  type: Address_types;
}

export interface Cities {
  id: string;
  name: string;
  region: string;
}

export interface Address_types {
  Legal;
  Delivery;
  Fact;
}
