export interface ReqUser {
    id?: number,
    name: string,
    email: string,
    password?: string,
    cpf?: string,
    image?: string,
    user_type_id?: number,
    isActive?: boolean,
    registered?: any,
    hide?: boolean
}
