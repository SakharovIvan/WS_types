export enum WS_CMD {
  create_new,
  update_repair,
  delete_repair,
  get_repair_list,
  repair_sample,
}

export interface WS_fuctions {
  func: WS_CMD;
  create_new: () => {};
  update: () => {};
  delete_repair: () => {};
  get_list: () => {};
}
