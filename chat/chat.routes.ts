import { Chat, Message } from "./chat.interface"

export enum CHAT{
createChat,
sendMessage,
patchMessage,
getMessages,
getChats
}

export interface chat_func{ 
createChat(data: Partial<Chat>):void,
sendMessage(data: Partial<Message>):void,
patchMessage(data:Message[]):void,
getMessages(data: { path: string }):Promise<Message[]|null>,
getChat(data:{ path:string }):Promise<Chat|null>

}