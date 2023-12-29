import { envs } from './configs/index.js';
import { AppRoutes } from './presentation/routes.js';
import { Server } from './presentation/server.js';

new Server({
  port: envs.PORT,
  routes: AppRoutes.routes,
}).start();
