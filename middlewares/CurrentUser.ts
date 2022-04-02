import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface UserPayload {
    id: string
    username: string
    email: string
    firstname: string
    lastname: string
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload
        }
    }
}

export const CurrentUser = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers?.authorization) {
        return next()
    }

    try {
        const bearerParts = (req.headers.authorization as string).split(' ')
        const bearerToken = bearerParts[1]

        req.currentUser = jwt.verify(bearerToken, process.env.JWT_KEY!) as UserPayload
    } catch (e) {}

    next()
}
