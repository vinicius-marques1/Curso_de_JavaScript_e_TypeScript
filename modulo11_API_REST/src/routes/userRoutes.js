import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Rotas para listar usuários
// (Em um sistema normal talzes esses não exitiriam)
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);

// Rotas para criar e modificar usuários
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
