import { Router } from 'express';
import { AuthController } from './controller.js';
import { AuthDatasourceImpl, AuthRepositoryImpl } from '../../infrastructure/index.js';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new AuthDatasourceImpl();
    const authRepository = new AuthRepositoryImpl(datasource);
    const controller = new AuthController(authRepository);

    router.post('/login', controller.login);
    router.post('/register', controller.register);

    return router;
  }
}
