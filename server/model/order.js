import mongoose from "mongoose";

const Schema = mongoose.Schema;

const order = new Schema({
    order_id: {
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
        
    },
    is_designer: {
        type:Boolean,
        default:true
    },
    is_operator: {
        type:Boolean,
        default:false
    },
    is_sale: {
        type:Boolean,
        default:false
    },
    is_product_finishing: {
        type:Boolean,
        default:false
    },
    type: {
        type: String, 
        enum: ["dongphuc_nhahang", "dongphuc_congty", "dongphuc_aolop","dongphuc_teambuilding"],
    },
},{ timestamps: { createdAt: 'created_at' } })
export {order}