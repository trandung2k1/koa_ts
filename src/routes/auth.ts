import Router from '@koa/router';
import authorController from '../controllers/auth';
import { verifyToken } from '../middlewares/auth';
const router = new Router({
    prefix: '/api/auth',
});
router.get('/login', verifyToken, authorController.login);
export default router;
