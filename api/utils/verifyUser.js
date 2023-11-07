import jwt from "jsonwebtoken";
import { errHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  console.log('gghg');
  const token = req.cookies.access_token;
  if (!token) return next(errHandler(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errHandler(401, "Token is not valid!"));

    console.log(user);
    req.user = user;
    next();
  });
};
