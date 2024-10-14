import mongoose from "mongoose";


const roledetailaction = new mongoose.Schema({
    //id của role
    roledetailId : {
        type: String,
        require:true
    },
    accessType : {
        // creact.....
        type: String,
        require:true
    }
},{ timestamps: { createdAt: 'created_at' } })
export {roledetailaction}