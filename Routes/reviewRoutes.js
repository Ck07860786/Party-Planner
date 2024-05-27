// reviewRoutes.js
import express from 'express';
import { requireSignIn } from '../Middlewares/authMiddleware.js';
import { createReviewController, getServiceReviewsController } from '../Controllers/reviewController.js';

const router = express.Router();

router.post('/create-review', requireSignIn, createReviewController);
router.get('/get-reviews/:serviceId', getServiceReviewsController);

export default router;
