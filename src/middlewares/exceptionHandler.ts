import { AppError } from "../errors/AppError";
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const ExceptionHandler = (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
            path: err.path
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error!'
    })
}
