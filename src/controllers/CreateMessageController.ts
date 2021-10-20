import { Response, NextFunction } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

export class CreateMessageController {
    handle = async (req: any, res: Response, next: NextFunction) => {
        const userId = req.user.id
        const { text } = req.body

        const result = await new CreateMessageService().execute(text, userId)

        return res.json(result)
    }
}