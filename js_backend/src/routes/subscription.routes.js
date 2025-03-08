import { Router } from 'express';
import { createSubscription } from '../controllers/subscription.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.route('/create-subscription/:channelId').post(
    verifyJWT,
    createSubscription
)


export default router