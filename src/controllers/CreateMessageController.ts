import { Response, NextFunction,Request } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

export const CreateMessageController = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.userId
    
    const { text } = req.body

    const result = await CreateMessageService(text, userId)

    return res.json(result)
}