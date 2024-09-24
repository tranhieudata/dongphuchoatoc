
import { Authorization } from '../controllers/MiddlewareController.js';
const authorization = new Authorization()
import express from 'express';
const analytics = express.Router();



// orderRouter.get("/users/:id",Authorization, userController.getone)
analytics.get("/total",authorization.checkAdmin, )
// orderRouter.delete("/users/:id",Authorization, userController.delete)
// analytics.put("/detail/:id", orderController.update)
// analytics.post('/create', orderController.create)
// orderRouter.post('/login', userController.login)
// orderRouter.get("/logout", userController.logout)
// orderRouter.get("/profile",Authorization ,userController.profile)



export {analytics}