const mailsender = require("../utils/mailsender");

exports.contactus=async(req,res)=>{
    try {
        const {firstname,lastname,email,mobilenumber,message}=req.body;
        if(!firstname||!lastname||!email||!mobilenumber||!message){
            return res.status(400).json({
                success:false,
                message:"please fill all details completely"
            })
        }
        const supportteammail="utkarsh7424sharma@gmail.com"
        const studentprob=await mailsender(email,"your feedback is recieved","we have recieved your mail we will solve the problem and reach you out soon");
        const tosupportteam=await mailsender(supportteammail,"some problem occured with student and the details are given below",studentprob);
        return res.status(200).json({
            success:true,
            message:"mail sent successfully",
            data:tosupportteam
        })

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:"some error occured while sending the mail"+error.message,
            
        })
    }
}