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

class RoledetailviewController {
    
   async create(req,res){
    try {
        const roledetailview = new RoleDetailViewModel(req.body)
        if(!roledetailview) {
            res.status(404)
        }
        else {
            const data = roledetailview.save()
            res.status(200).json(data)
            
        }n
    } catch (error) {
        res.status(500)
    }
   }
   async detele(req,res){
    
   }
   async getOne(req,res){
        const roledetail_Id = await RoleDetailModel.findOne({roleId:req.user.roleId,typeRolldetail:"view"})
        const rolview = await RoleDetailViewModel.find({roledetailId:roledetail_Id._id})
        const lists = []
        rolview.forEach(element => {
            lists.push(element.accessType)
        });
        if(rolview) {
            return res.status(200).json(lists)
        }else{
            return res.status(404)
        }
   }


}
export {RoledetailviewController}