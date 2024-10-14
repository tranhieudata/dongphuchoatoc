import mongoose from "mongoose";

const Schema = mongoose.Schema;

const user = new Schema({
    user_name: {
        type:String,
        require:true
    },
    passwords: {
        type:String,
        require:true,
    },
    roleId: {
        type:String,
        require:true, 
    }
},{ timestamps: true })
export {user}