import { Request, Response, NextFunction } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
    handle = async (req: Request, res: Response, next: NextFunction) => {
        const { code } = req.body

        const service = new AuthenticateUserService();

        const result = await service.execute(code)

        return res.json(result)
    }
}

export { AuthenticateUserController }