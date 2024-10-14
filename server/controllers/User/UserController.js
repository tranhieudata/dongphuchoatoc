import mongoose from "mongoose";
import { user } from "../../model/user.js";
// const MyModel = mongoose.model("tên dữ liệu data",user)
import { role } from "../../model/role.js";
import {roledetailaction} from "../../model/roledetailaction.js"
import { roledetail } from "../../model/roledetail.js";
import { roledetailview } from "../../model/roledetailview.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const UserModel = mongoose.model("user",user)
const RoleDetailModel = mongoose.model("roledetail",roledetail)
const RoleDetailActionModel = mongoose.model("roledetailaction",roledetailaction)
const RoleDetailViewModel = mongoose.model("roledetailview",roledetailview)
class UserController {
    async create(req,res) {
        try {
            // const accesstoken =  req.header.token
            const salt = await bcrypt.genSaltSync(10);
            const hash = await bcrypt.hashSync(req.body.passwords, salt);
            const userData = new UserModel(req.body)
            userData.passwords = hash

            if(!userData) {
                res.status(404)
            }
            else {
                const saveData = await userData.save()
                res.status(200).json(saveData)
            }
        } catch (error) {
            res.status(500)
        }
    }
    async getall(req,res){
        try {
            const userData = await UserModel.find({});
            res.json(userData)
            
        } catch (error) {
            res.status(500)
        }
    }
    async getone(req,res){
        try {
            const id = req.params.id
            const userData = await UserModel.findById(id)
            if(!userData){

                res.status(400).json({error: "không tìm thấy id"});
                return
            }

            res.json(userData)
            
        } catch (error) {
            res.status(400).json({error: "err"});
        }
    }
    async profile(req,res){
        try {
            res.json(req.user)
            
        } catch (error) {
            res.status(404).json({error: "err"});
        }
    }
    async update(req,res) {
        const id = req.params.id
        const userData = await UserModel.findById(id);
        // const id = userData.id
        if(!userData){
            res.status(400).json({error: "không tìm thấy id"});
            return
        }
        const updateData = await UserModel.findByIdAndUpdate(id,req.body)
        
        res.json(updateData)
    }

    async delete(req,res) {
        const id = req.params.id
        const userData = await UserModel.findById(id);
        if(!userData){
            res.status(400).json({error: "Không tìm thấy id"});
            return
        }
        const updateData = await MyModel.findByIdAndDelete(id)
        res.json(updateData)
    }
    async login (req,res) {
        try {
            const user = await UserModel.findOne({user_name:req.body.user_name})
            
            if(!user) {
                res.status(404).json("Username is invalid")
            }
            else {
                try {
                    const checkUser = await bcrypt.compare(req.body.passwords, user.passwords)
                    if(checkUser){
                        const accesstoken = jwt.sign({id:user._id,user_name:user.user_name,roleId: user.roleId },process.env.SECRET_KEY)
                        res.cookie("accesstoken",accesstoken, {
                            httpOny:true
                        })
                        
                        const roledetail_Id = await RoleDetailModel.findOne({roleId:user.roleId,typeRolldetail:"view"})
                        const rolview = await RoleDetailViewModel.find({roledetailId:roledetail_Id._id})
                        if(rolview) {
                            res.cookie("role",rolview[0].accessType, {
                                httpOny:true
                            })
                            
                        }
                        res.status(200).json({noti:"dang nhap thanh cong",accesstoken})
                    }else {
                        res.status(403).json({noti:"dang nhap khong thanh cong"})
                    }
                } catch (error) {
                    res.status(500)
                }
                    
                };
            }catch (error) {
            res.status(500)
        }
    }
    async logout (req,res) {
        res.clearCookie("accesstoken").status(200).json("xóa cookie thanh cong")
    }
    
}
export {UserController}