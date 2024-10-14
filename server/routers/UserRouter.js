import { UserController } from  '../controllers/User/UserController.js';
import { Authorization } from '../controllers/MiddlewareController.js';
import express from 'express';
const userRouter = express.Router();
const userController = new UserController()
const authorization = new Authorization()


userRouter.get("/users/:id", userController.getone)
userRouter.get("/users", userController.getall)
userRouter.delete("/users/:id", userController.delete)
userRouter.get("/profile" ,userController.profile)
userRouter.put("/users/:id", userController.update)
userRouter.post('/create', userController.create)
userRouter.post('/login', userController.login)
userRouter.get("/logout", userController.logout)

 
export {userRouter}


