import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express";
import { Secret_key } from "./config";

export function userMiddlware (req:Request, res:Response,next:NextFunction){
const header = req.headers["authorization"]
console.log(header);
const decoded = jwt.verify(header as string, Secret_key) 
console.log(decoded);

if (decoded) {
    if (typeof decoded === "string") {
        res.status(403).json({
            message: "You are not logged in"
        })
        return;    
    }
    //@ts-ignore
    req.userId = (decoded as JwtPayload).id;
    next()
} else {
    res.status(403).json({
        message: "You are not logged in"
    })
}
}