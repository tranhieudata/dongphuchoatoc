// 670c07078f2c0fee0bcd5cb9 view admin

import express from 'express';
import { RoledetailviewController } from '../controllers/Role/RoledetailviewController.js';
import { Authorization } from '../controllers/MiddlewareController.js';
const roleRouter = express.Router();
const roledetailviewController = new RoledetailviewController()
const authorization = new Authorization()

roleRouter.get("/view",authorization.checkUser,roledetailviewController.getOne)



export {roleRouter}