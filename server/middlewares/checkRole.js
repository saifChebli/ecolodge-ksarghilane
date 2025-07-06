import jwt from "jsonwebtoken";



export const checkRole = (req, res, next) => {
    const authHeader = req.cookies.token;
    if (authHeader) {
        jwt.verify(authHeader, process.env.JWT_SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(403).json("Token is not valid!");
            }
            if (user.role !== "SUPERADMIN") {
                return res.status(403).json("You are not authorized!");
            }
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("You're not authenticated!");
    }
};