import { Response, NextFunction, Request } from 'express';
import { ProfileUserService } from '../services/ProfileUserService';

export const ProfileUserController = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req

    const result = await ProfileUserService(userId)

    return res.json(result)
}