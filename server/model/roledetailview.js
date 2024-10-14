import mongoose from "mongoose";


const roledetailview = new mongoose.Schema({
    //id của role
    roledetailId : {
        type: String,
        require:true
    },
    accessType : {
        // view1, view2  quyền truy cập view của các role, view address, view total, view content
        type: String,
        require:true
    }
},{ timestamps: { createdAt: 'created_at' } })
export {roledetailview}