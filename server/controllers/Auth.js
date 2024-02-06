const user=require('../models/users');
const OTP=require('../models/otp');
const otpgenerator=require('otp-generator');
const profile = require('../models/profile');
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");
require("dotenv").config();

exports.otp=async(req,res)=>{
    try {
        const {email}=req.body;
        const checckuser = await user.findOne({email});
        if(checckuser){
            res.status(400).json({
                success:false,
                message:"email_id alresdy exist"
            });
        }
        else{
            var otp=otpgenerator.generate(6,{
                specialChars:false,
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
            });
            let result=await OTP.findOne({otp:otp});
            while(result){
                var otp=otpgenerator.generate(6,{
                    specialChars:false,
                    upperCaseAlphabets:false,
                    lowerCaseAlphabets:false,
                }); 
                result=await OTP.findOne({otp:otp});
            }
            const otpkientry = await OTP.create({email,otp});
            res.status(200).json({
                success:true,
                message:"otp entry created in the databse",
                data:otpkientry
            })

        }
    } catch (error) {
        console.log("some error occured during creating otp ",error.message);
        res.status(200).json({
            success:false,
            message:"unable to create otp"
        })
    }
};
exports.signup=async(req,res)=>{
    try {
        const {firstName,lastName,email,password,confirmPassword,accounttype,mobilenumber,otp}=req.body;
        if(!firstName||!lastName||!email||!password||!confirmPassword||!otp){
            res.status(400).json({
            success:false,
            message:"please make the all the entries marked"
            });
        }
        if(password!=confirmPassword){
            res.status(401).json({
                success:false,
                message:"password and confirmpassword does not matches"
            });   
        }
        const existinguser=await user.findOne({email:email});
        if(existinguser){
        return res.status(402).json({
            status:false,
            message:"email id already registered"
        });
        }
        const recentotp=await OTP.find({email}).sort({createdAt:-1}).limit(1);
        const s=recentotp.length;
        console.log("the length is",s)
        // console.log(recentotp[0]);
        if(recentotp.length==0){
            res.status(404).json({
                success:false,
                message:"no otp found"
            });
        }
        else if(recentotp[0].otp!=otp){
            console.log(otp)
            console.log(recentotp[0].otp)
            res.status(405).json({
                successs:false,
                message:"otp does not match"
            });
        }
        else{
            const prof=await profile.create({
            gender:null,
            dateofbirth:null,
            about:null,
            mobilenumber:mobilenumber,
            }); 

        const hashpassword=await bcrypt.hash(password,10);

        const usercreate= await user.create({
            firstname:firstName,
            lastname:lastName,
            email,
            password:hashpassword,
            accounttype,
            additionaldetails:prof._id,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        });
        res.status(200).json({
            success:true,
            message:"enrty in the databse created OTP CREATED",
            data:usercreate,
            otp
        })
        
    }
    } catch (error) {
        console.log(error.message)
    res.status(500).json({
        success:false,
        message:"some erroe occured in the database "+error.message,
    }) ;       
    }
}




exports.login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email||!password){
            res.status(400).json({
                success:false,
                message:"please enter email and password"
            })
        }
        const signuser=await user.findOne({email}).populate("additionaldetails");
        // console.log(signuser)
        if(!signuser){
            res.status(200).json({
                success:false,
                message:"user not registered "
            })
        }
        if(await bcrypt.compare(password,signuser.password)){
            const payload={
                email:signuser.email,
                id:signuser._id,
                accounttype:signuser.accounttype
            }
            const token=await jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h"
            });
            signuser.token=token;
            signuser.password=undefined;

            const options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true
            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                signuser,
                message:'logged in successfully',
            });

        }
        else{
            res.status(400).json({
                success:false,
                message:'password is incorrect',
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'logged in failed'+error.message,
        })
    }
}

exports.changepassword=async(req,res)=>{
    try {
        const{password,newpassword,confirmnewpassword,email}=req.body;
        if(!password||!newpassword||!confirmnewpassword){
            res.status(400).json({
                success:true,
                message:"please enter the complete details"
            })
        }
        if(confirmnewpassword!=newpassword)
        {
            res.status(400).json({

                success:true,
                message:"confirm_new_password and new password does not matches"
        })
        }
        const checkpass=await user.findById({email:email});
        const bpass=await bcrypt.hash(newpassword,10);
        if(!await bcrypt.compare(password,checkpass.password)){
            res.status(401).json({
                success:true,
                message:"original password does not matches plaesse trry again"                
            })
        }
        else{
            const  resp=await user.findByIdAndUpdate({email:email},{
                password:bpass
            });
        }
        res.status(200).json({
            success:true,
            message:"password udated successfully",
            data:resp
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"we are unable to update the new password in the database "
        })
    }
}


