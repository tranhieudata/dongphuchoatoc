import mongoose from "mongoose";


const floworder = new mongoose.Schema({
    //id của đơn hàng
    order_id : {
        type: String,
        require:true
    },
    // trạng thái
    state : {
        //khi sale đăng đơn thiết kế thì state = "design"
        //sau khi thiết kế xong  thì thiết kế đẩy qua sale và state ="sale"
        type: String,
        require:true
    }
},{ timestamps: { createdAt: 'created_at' } })
export {floworder}