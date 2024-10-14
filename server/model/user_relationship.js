import mongoose from "mongoose";


const user_relationship = new mongoose.Schema({
    //id_user
    userId : {
        type: String,
        require:true
    },
    roleId : {
        type: String,
        require:true
    }
},{ timestamps: { createdAt: 'created_at' } })
export {user_relationship}