export enum CATALOGUE {
  MATERIAL,
  ANALOGUE,
  PRODUCT,
  PRODUCT_TYPE,
  PRODUCT_MAT_NO,
  SCHEME,
}

export enum CRUD {
  GET,
  SEARCH,
  UPSERT,
  DELETE,
  FULL_UPDATE,
}

export interface CATALOGUE_CMD {
  catalogue: CATALOGUE;
  crud: CRUD;
}
