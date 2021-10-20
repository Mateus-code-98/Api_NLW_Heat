import { Response, NextFunction, Request } from 'express';
import { GetLast3MessagesService } from '../services/GetLast3MessagesService';

export const GetLast3MessagesController = async (req: Request, res: Response, next: NextFunction) => {
    const result = await GetLast3MessagesService()

    return res.json(result)
}