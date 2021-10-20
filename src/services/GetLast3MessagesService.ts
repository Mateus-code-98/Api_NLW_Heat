import { Message, User } from "../database/models"

export const GetLast3MessagesService = async () => {
    const messages = await Message.findAll(
        {
            limit: 3,
            page: 1,
            order: [["createdAt", "DESC"]],
            include:{
                model:User,
                as:"user"
            }
        })
    return messages
}
