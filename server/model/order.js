import mongoose from "mongoose";

const Schema = mongoose.Schema;

const order = new Schema({
    order_code: {
        type: String,
        required: true,
      },
    name: {
        type:String,
        require:true
    },
    description: {
        type:String,
        require:true
    },
    address: {
        type:String,
    },
    phone: {
        type:String,
    },
    img: {
        type:String,
    },
    total:{
        type:Number
        
    }
},{ timestamps: { createdAt: 'created_at' } })
export {order}