import {Router} from 'express'
import { createComment, getComments } from '../controllers/comment.controller.js'
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

//create comment
router.route('/create-comment').post(
    verifyJWT,
    createComment
)

router.route('/get-comments/:id').get(
    getComments
)

export default router