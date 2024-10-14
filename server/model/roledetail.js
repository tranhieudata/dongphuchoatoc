import mongoose from "mongoose";


const roledetail = new mongoose.Schema({
    //id của role
    roleId : {
        type: String,
        require:true
    },
    typeRolldetail : {
        // view hoặc action
        type: String,
        require:true
    }
},{ timestamps: { createdAt: 'created_at' } })
export {roledetail}