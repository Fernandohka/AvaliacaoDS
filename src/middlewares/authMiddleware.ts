import { Request, Response, NextFunction } from "express";

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    next();
}

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    next();
}