import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import { generateToken } from "../utils.js";

export const loginController = async (req,res) => {
    const { userName, password } = req.body
    try {
        const user = await User.findOne({ email: userName })
        if(!user) return res.status(401).json('Invalid email')
        
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(401).json('Invalid passsword')

        const token = generateToken(user._id)
        res.cookie('token', token, {
            httpOnly : true,
            secure : false,
            maxAge : 24 * 60 * 60 * 1000
        }).json({
            message : 'Login successful',
            user : {
                id : user._id,
                email : user.email,
                name: user?.name
            }
        })

        res.status(200).json('Login Successfull', { user })
    } catch (e) {
        res.status(500).json('Server error')
    }
}