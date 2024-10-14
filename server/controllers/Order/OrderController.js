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

class OrderController {

 

    //tạo oder
    async create(req,res) {

            try {
                const orderData = new OrderModel(req.body)
                
                if(!orderData) {
                    res.status(404)
                }
                else {
                    const data = orderData.save()
                    res.status(200).json(data)
                    
                }n
            } catch (error) {
                res.status(500)
            }
    }
    async getall(req,res){
        try {
            const orderData = await OrderModel.find({});
            return res.json(orderData)

        } catch (error){
            res.status(500)
        }
        
    }
    async update(req,res){
            const id = req.params.id
            const order = await OrderModel.findById(id)

            if(!order) {
                return res.status(404).json("Not Found")
            }
            const updateOrder = await OrderModel.findByIdAndUpdate(id,req.body)
            res.status(202).json(updateOrder)
      
    }
    async delete(req,res){

            const id = req.params.id
            const order = await OrderModel.findById(id)
            if(order) {
                await OrderModel.findByIdAndDelete(id)
            }else{
                return res.status(404)
            }
    }
    async getone(req,res){


            const id = req.params.id
            const order = await OrderModel.findById(id)
            if(order) {
                return res.status(200).json(order)
            }else{
                return res.status(404)
            }

    }
   
}
export {OrderController}