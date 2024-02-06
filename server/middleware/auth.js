const jwt=require("jsonwebtoken");
require('dotenv').config();
const user=require("../models/users");
exports.auth=async(req,res,next)=>{
    try {
        const token=req.cookies.token||req.body.token||req.header("Authorisation").replace("Bearer","")
        if(!token){
            res.status(400).json({
                success:false,
                message:"token missing in the request"
            });
        }
        try {
                const decode=await jwt.verify(token,process.env.JWT_SECRET);
                console.log(decode)
                req.user=decode;
        }
        catch (error) {
            res.status(400).json({
                successs:false,
                message:"token is invalid"+error
            })
        }
        next();
    } catch (error) {
        res.status(400).json({
            successs:false,
            message:"some error occured during validation"+error.message
        })        
    }
}

exports.isStudent=async(req,res,next)=>{
try {
    if(req.user.accounttype!="Student"){
        return res.status(401).json({
            success:true,
            message:"this is the procteded route for students only"
        });
    }
    next();
} catch (error) {
    res.status(400).json({
        successs:false,
        message:"unable to validate"+error.message
    })
}
}

exports.isInstructor = async (req, res, next) => {
    try{
        console.log("haanji dekho")
        console.log(req.user.accounttype)
           if(req.user.accounttype !== "Instructor") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for Instructor only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   }


exports.isAdmin=async(req,res,next)=>{
    try {
       
        if(req.user.accounttype!="Admin"){
            return res.status(401).json({
                success:true,
                message:"this is the procteded route for Admin only"
            });
        }
        next();
    } catch (error) {
        res.status(400).json({
            successs:false,
            message:"unable to validate"+error.message
        })
    }
    }
