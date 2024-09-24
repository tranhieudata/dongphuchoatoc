import mongoose from "mongoose";
import { order } from "../../model/order.js";
// const MyModel = mongoose.model("tên dữ liệu data",user)

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const OrderModel = mongoose.model("order",order)

class OrderController {
    async create(req,res) {
        try {
            const orderData = new OrderModel(req.body)
            
            if(!orderData) {
                res.status(404)
            }
            else {
                const data = orderData.save()
                res.status(200).json(data)
                
            }
        } catch (error) {
            res.status(500)
        }
    }
    async getall(req,res){
        try {
            const myrole = req.user.role
            console.log(myrole)
            if(myrole == "admin"){
                const orderData = await OrderModel.find({});
                return res.json(orderData)
            }
            if(myrole == "designer"){
                const orderData = await OrderModel.findOne({is_designer:true});
                return res.json(orderData)
            }
            if(myrole == "sale"){
                const orderData = await OrderModel.findOne({is_sale:true});
                console.log(orderData)
                return res.json(orderData)
            }
            if(myrole == "operator"){
                const orderData = await OrderModel.findOne({is_operator:true});
                return res.json(orderData)
            }
            if(myrole == "product_finishing"){
                const orderData = await OrderModel.findOne({is_product_finishing:true});
                return res.json(orderData)
            }
            res.status(404).json("Not Found data")
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
}
export {OrderController}