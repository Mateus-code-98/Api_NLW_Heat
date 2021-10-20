import { Request, Response, NextFunction } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

export const AuthenticateUserController = async (req: Request, res: Response, next: NextFunction) => {
    const { code } = req.body

    const result = await AuthenticateUserService(code)

    return res.json(result)
}