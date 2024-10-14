import mongoose from "mongoose";


const role = new mongoose.Schema({

   
    typeRole : {
        // designer, admin,....
        type: String,
        require:true
    }

},{ timestamps: { createdAt: 'created_at' } })
export {role}