import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ApiResponse from "../utils/ApiResponse.js";

interface JwtPayload {
    userId: string;
    role: string;
}

export interface AuthRequest extends Request {
    user?: JwtPayload;
}

export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        let token: string | undefined;

        // From Authorization Header
        if (req.headers.authorization?.startsWith("Bearer ")) {
            token = req.headers.authorization.split(" ")[1];
        }
        else if (req.cookies.token) {
            token = req.cookies.token;   // From Cookies if authorizaion dont have token
        }

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as JwtPayload;

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json(new ApiResponse(401, null, "Invalid token"))
    }
};