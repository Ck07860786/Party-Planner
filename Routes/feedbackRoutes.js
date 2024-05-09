import express from 'express'
import { requireSignIn } from '../Middlewares/authMiddleware.js'
import { addFeedbackController } from '../Controllers/FeedbackControlller.js'
const router = express.Router()

router.post('/add-feedback', requireSignIn, addFeedbackController)

export default router


