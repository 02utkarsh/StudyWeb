const user=require('../models/users');
const mailsender=require('../utils/mailsender');
const bcrypt=require('bcrypt');
const crypto=require('crypto')
exports.resetPasswordToken=async(req,res)=>{
    try {
        const emails=req.body.email;
        console.log(emails);
        const useri=await user.findOne({email:emails});
        if(!useri){
            return res.json(
                {success:false,
                message:"email id is not registered with us"
            }
            )
        }
        const tokens=await crypto.randomUUID();
        const updateddeatails=await user.findOneAndUpdate({email:emails},{
            token:tokens,
            resetpasswordexpires:Date.now()+5*60*1000,
        },
        {new:true}
        );
        console.log(updateddeatails);
    // creating the url for reseting the password
        const url=`http://localhost:3000/updatepassword/${tokens}`
    
        await mailsender(emails,"reset your password",url);
        res.status(200).json({
            success:true,
            message:"mail send successfully check your mail",
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:"something went wrong"
        })       
    }
}




exports.resetpassword=async(req,res)=>{
    try {
        const {password,confirmPassword,token}=req.body;
        // console.log(confirmpassword)
        // console.log(req.body)
        // console.log(password,"this is passsss")
        // console.log(confirmpassword,"this is conpasssss")

    if(password!=confirmPassword){
        return res.status(200).json({
            success:false,
            message:"passoword and resetpassword does not matches"
        })
    };
    const userdetails=await user.findOne({token:token});

    if(!userdetails){
        res.status(400).json({
        success:false,
        message:"token invalid"
        });        
    }
    if(userdetails.resetpasswordexpires>Date.now()){
        return res.status(404).json({
            success:true,
            message:"token expired please try again"
        });
    }
    const hasspassword=await bcrypt.hash(password,10);

    await user.findOneAndUpdate({token:token},
        {password:hasspassword},
        {new:true}
        );

        return res.status(200).json({
            success:true,
            message:"password successsfully changed"
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"unable to change password"+error.message
        })
    }
}