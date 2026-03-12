import { Role, Valid_User } from "../auth_service/main"

export interface Message {
    id: string
    text: string
    userid: string
    username: string
    isRead: boolean
    isAdmin: boolean
    chat: Chat
    createdAt: Date
    updatedAt: Date
}

export interface Chat {
    id: string
    path: string
    messages: Message[]
    createdAt: Date
    updatedAt: Date
}

export class MessageDTO {
    text: string
    userid: string
    username: string
    isRead: boolean
    isAdmin: boolean
    chat: Chat
    constructor(data:any, user:Valid_User,role:Role) {
        this.chat = data.chat
        this.text = data.text
        this.isRead = data.isRead
        this.userid = user.id
        this.username = user.email
        this.isAdmin = role.isadmin
    }
}