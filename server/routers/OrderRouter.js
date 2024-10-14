





import { OrderController } from  '../controllers/Order/OrderController.js';
import { Authorization } from '../controllers/MiddlewareController.js';
const authorization = new Authorization()
import express from 'express';
const orderRouter = express.Router();
const orderController = new OrderController()



orderRouter.get("/allorder",authorization.checkUserRead, orderController.getall)
orderRouter.put("/detail/:id/edit", authorization.checkUserEdit, orderController.update)
orderRouter.get("/detail/:id", authorization.checkUserRead, orderController.getone)
orderRouter.post('/create', authorization.checkUserCreate, orderController.create)
// orderRouter.post('/login', userController.login)
// orderRouter.get("/logout", userController.logout)
// orderRouter.get("/profile",Authorization ,userController.profile)



export {orderRouter}