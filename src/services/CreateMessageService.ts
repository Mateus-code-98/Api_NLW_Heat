import { io } from "../app";
import { Message } from "../database/models"

interface IMessage {
    text: string;
    userId: string;
}

export const CreateMessageService = async (text: string, userId: string): Promise<IMessage> => {
    const message = await Message.create({ text, userId })
    
    io.emit("new_message", message)
    
    return message;
}
