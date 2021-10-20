import { Message } from "../database/models"

interface IMessage{
    text:string;
    userId:string;
}

export class CreateMessageService {
    execute = async (text: string, userId: string):Promise<IMessage> => {
        const message = await Message.create({ text, userId })
        return message;
    }
}