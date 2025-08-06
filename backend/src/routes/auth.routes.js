import express from 'express'
import { loginController } from '../controllers/login.js'

const router = express.Router()

router.post('/login', loginController)

router.post('/logout', (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: false,
            sameSite: 'lax'
        })
        res.status(200).json('Logout Successful')
    } catch (e) {
        res.status(500).json('Something went wrong')
    }
})

export default router;