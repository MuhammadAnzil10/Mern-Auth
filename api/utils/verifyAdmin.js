import jwt from "jsonwebtoken";
import { errHandler } from "./error.js";

export const verifyToken = (req, res, next) => {

  const token = req?.cookies?.admin_access_token;
 
  if (!token) return next(errHandler(401, "You are not authenticated!"));

  jwt.verify(token, process.env.ADMIN_JWT_SECRET, (err, admin) => {
    if (err) return next(errHandler(401, "Token is not valid!"));
    req.user = admin;
    next();
  });
};
