import mongoose from "mongoose";
import { order } from "../../model/order.js";
// const MyModel = mongoose.model("tên dữ liệu data",user)

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { role } from "../../model/role.js";
import {roledetailaction} from "../../model/roledetailaction.js"
import { roledetail } from "../../model/roledetail.js";
import { roledetailview } from "../../model/roledetailview.js";

const OrderModel = mongoose.model("order",order)
const RoleModel = mongoose.model("role",role)
const RoleDetailModel = mongoose.model("roledetail",roledetail)
const RoleDetailActionModel = mongoose.model("roledetailaction",roledetailaction)
const RoleDetailViewModel = mongoose.model("roledetailview",roledetailview)

class RoleController {
    
   async getallrole(req,res){
        const listview = Object.keys(await OrderModel.findOne())
        return res.json(listview)
   }

   async getroleview(req,res){
     //const orderData = await OrderModel.find({});
     //         // detailview có dang roledetailId / accessType
     //         //danh sách các trường có trong order
     //         const newData = {}
     // const listview = Object.keys(await OrderModel.findOne()) danh sách các quyền trong order
        const roledetailId = await RoleDetailModel.findOne({roleId:req.user.roleId,typeRolldetail:"view"})
        if(!roledetailId){
            return false
        }
        const roledetaiview = await RoleDetailViewModel.find({roledetailId:roledetailId})
        if(!roledetaiview){
            return false
        }
        res.status(200).jon(roledetaiview) 


   }
}
export {RoleController}