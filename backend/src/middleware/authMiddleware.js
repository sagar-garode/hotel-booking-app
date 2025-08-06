import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) return res.status(401).json('Unauthorised')
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next();
    } catch (e) {
        return res.status(403).json('Invalid token')
    }
}

export default authMiddleware;