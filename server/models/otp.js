const mongoose=require("mongoose");
const mailsender=require('../utils/mailsender');
const otpschema= new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true
    },
    otp:{
        type:Number,
        required:true
    },
    createdat:{
        type:Date,
        deafult:Date.now(),
        expires:5*60,
    }
});

async function sendverificationmail(email,otp){
    try {
        const response= await mailsender(email,"Verification email by notion",otp);
        console.log("email sent succesfully ",response);
    } catch (error) {
        console.log("some error  occured while sending the email ",error.message);
    }
}

otpschema.pre("save",async function(next){
    await sendverificationmail(this.email,this.otp);
    next();
})



module.exports=mongoose.model('otp',otpschema)