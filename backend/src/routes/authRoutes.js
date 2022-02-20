import express from 'express'
import {
    handleRefreshToken,
    login,
    logout,
} from '../controllers/authController.js'

const router = express.Router()

router.post('/logout', logout)
router.post('/login', login)
router.post('/refreshtoken', handleRefreshToken)

export default router
