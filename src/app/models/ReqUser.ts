export interface ReqUser {
    name: string,
    email: string,
    password: string,
    cpf?: string,
    image?: string,
    user_type_id?: number,
    isActive?: boolean,
    registered?: any,
    hide?: boolean
}
