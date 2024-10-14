

import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import { order } from "../model/order.js";

import { role } from "../model/role.js";
import {roledetailaction} from "../model/roledetailaction.js"
import { roledetail } from "../model/roledetail.js";
import { roledetailview } from "../model/roledetailview.js";
const OrderModel = mongoose.model("order",order)
const RoleModel = mongoose.model("role",role)
const RoleDetailModel = mongoose.model("roledetail",roledetail)
const RoleDetailActionModel = mongoose.model("roledetailaction",roledetailaction)
const RoleDetailViewModel = mongoose.model("roledetailview",roledetailview)

class Authorization {
    async checkUser (req,res,next){
        const accesstoken = req.cookies.accesstoken
        console.log(req.cookies)
        if (!accesstoken) {
            return res.status(403).json(" Accesstoken undefined")
        }
        // verify token
        try {
            jwt.verify(accesstoken, process.env.SECRET_KEY,(err, user)=>{
                if(!user) return res.status(403)
                req.user = user
            })
            next()
            
        }catch {
            res.status(403).json("chua verify")
        }
    }
    async checkUserRead (req,res,next){
        const accesstoken = req.cookies.accesstoken
        if (!accesstoken) {
            return res.status(403).json(" Accesstoken undefined")
        }
        // verify token
        try {
            jwt.verify(accesstoken, process.env.SECRET_KEY,(err, user)=>{
                if(!user) return res.status(403)
                req.user = user
            })
            //check quyền
            const roledetail_Id = await RoleDetailModel.find({roleId:req.user.roleId,typeRolldetail:"action"})
            if(!roledetail_Id){
                return res.status(403)
            }
            // kiểm tra quyền thêm sửa xóa đối với đơn hàng
            const roledetailaction = await RoleDetailActionModel.find({roledetailId:roledetail_Id,accessType:"READ"})
            if(roledetailaction){next()}else{return res.status(403) }
            
        }catch {
            res.status(403).json("chua verify")
        }
    }
    async checkUserEdit (req,res,next){
        const accesstoken = req.cookies.accesstoken
        if (!accesstoken) {
            return res.status(403).json(" Accesstoken undefined")
        }
        // verify token
        try {
            jwt.verify(accesstoken, process.env.SECRET_KEY,(err, user)=>{
                if(!user) return res.status(403)
                req.user = user
            })
            //check quyền
            const roledetail_Id = await RoleDetailModel.find({roleId:req.user.roleId,typeRolldetail:"action"})
            if(!roledetail_Id){
                return res.status(403)
            }
            // kiểm tra quyền thêm sửa xóa đối với đơn hàng
            const roledetailaction = await RoleDetailActionModel.find({roledetailId:roledetail_Id,accessType:"EDIT"})
            if(roledetailaction){next()}else{return res.status(403) }
            
        }catch {
            res.status(403).json("chua verify")
        }
    }
    async checkUserDelete (req,res,next){
        const accesstoken = req.cookies.accesstoken
        if (!accesstoken) {
            return res.status(403).json(" Accesstoken undefined")
        }
        // verify token
        try {
            jwt.verify(accesstoken, process.env.SECRET_KEY,(err, user)=>{
                if(!user) return res.status(403)
                req.user = user
            })
            //check quyền
            const roledetail_Id = await RoleDetailModel.find({roleId:req.user.roleId,typeRolldetail:"action"})
            if(!roledetail_Id){
                return res.status(403)
            }
            // kiểm tra quyền thêm sửa xóa đối với đơn hàng
            const roledetailaction = await RoleDetailActionModel.find({roledetailId:roledetail_Id,accessType:"DELETE"})
            if(roledetailaction){next()}else{return res.status(403) }
            
        }catch {
            res.status(403).json("chua verify")
        }
    }
    async checkUserCreate (req,res,next){
        const accesstoken = req.cookies.accesstoken
        if (!accesstoken) {
            return res.status(403).json(" Accesstoken undefined")
        }
        // verify token
        try {
            jwt.verify(accesstoken, process.env.SECRET_KEY,(err, user)=>{
                if(!user) return res.status(403)
                req.user = user
            })
            //check quyền
            const roledetail_Id = await RoleDetailModel.find({roleId:req.user.roleId,typeRolldetail:"action"})
            if(!roledetail_Id){
                return res.status(403)
            }
            // kiểm tra quyền thêm sửa xóa đối với đơn hàng
            const roledetailaction = await RoleDetailActionModel.find({roledetailId:roledetail_Id,accessType:"CREATE"})
            if(roledetailaction){next()}else{return res.status(403) }
            
        }catch {
            res.status(403).json("chua verify")
        }
    }
}

export {Authorization}