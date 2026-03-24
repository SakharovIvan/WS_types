import { Valid_User } from "../auth_service/main";
import { Customer } from "./customer.types";

export enum Customer_CMDs {
    Create,
    Patch,
    Get,
    Get_List,
    Set_user
}

export interface Customer_funcs {
    create(Customer: Customer[]): Promise<Customer[]>
    patch(Customer: Customer[]): Promise<Customer[]>
    get(data: {user?: Valid_User , user_id?: string}): Promise<Customer>
    get_List(Customer: Partial<Customer>): Promise<Customer[]>
    set_user(data:{user_id:string,Customer_id:string}): Promise<void>
}