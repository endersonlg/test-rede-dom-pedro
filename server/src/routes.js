import { Router } from 'express';
import User from './app/model/User'
import UserController from './app/controller/UserController';

const routes = new Router();

routes.post('/users', UserController.create)
routes.get('/users', UserController.list)

export default routes;
