
import jwt from "jsonwebtoken"

class Authorization {
     checkUser = (req,res,next)=> {
        const accesstoken = req.cookies.accesstoken
        if (!accesstoken) {
            return res.status(403).json(" Accesstoken undefined")
        }
        // verify token
        try {

            jwt.verify(accesstoken, process.env.SECRET_KEY,(err, user)=>{
                if(!user) return res.status(403)
                req.user = user

            })
            next()
        }catch {
            res.status(403).json("chua verify")
        }
    }
    checkDesignerAndSale =(req,res,next) =>{

    }
    checkSaleAndOperator =(req,res,next) =>{

    }
    checkOperatorAndProduct =(req,res,next) =>{

    }

}
export {Authorization}