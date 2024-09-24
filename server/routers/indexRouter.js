
import { userRouter } from "./UserRouter.js"
import {orderRouter} from "./OrderRouter.js"
// const userController = new UserController()


function router(app) {

    app.use('/api/usermanager',userRouter)
    app.use('/api/order',orderRouter)

    // app.use('/',(req,res)=>{
    //     res.send("HOME")
    // })

}
export {router}

