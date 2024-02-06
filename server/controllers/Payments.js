const {instance}=require('../config/razorpay');
const course=require('../models/course');
const user=require('../models/users');
const mailsender=require('../utils/mailsender');
const {courseEnrollmentEmail}=require("../mail/templates/courseEnrollmentEmail");
const mongoose = require('mongoose');


exports.capturepayments=async(req,res)=>{
    try {
        const {course_id}=req.id;
        const user_id=req.signuser.id;

        if(!course_id){
            res.status(400).json({
                success:false,
                message:"please enter the valid course id "
            });
        }
        let findedcourse;
        try {
            findedcourse=await course.findById(course_id);
            if(!findedcourse){
                res.status(404).json({
                    success:false,
                    message:"unable to find the course please enter the valid course"
                });
            }
            const uid=new mongoose.Types.ObjectId(user_id);
            if(course.studentsEnrolled.includes(uid)){
                res.status(200).json({
                    success:true,
                    message:"student already is enrolled in the course"
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success:false,
                message:"some error occured ::"+error,
            })
        }

        const amount=findedcourse.price;
        const currency="INR";
        const options={
            amount,
            currency,
            receipt:math.random(Date.now()).toString(),
            notes:{
                courseid:course_id,
                user_id
            }
        };
        try {
            const paymentresponse=await instance.orders.create(options);
            console.log(paymentresponse);

            res.status(200).json({
                success:true,
                course_name:findedcourse.coursename,
                course_description:findedcourse.description,
                thumbnail:findedcourse.thumbnail,
                orderid:paymentresponse.id,
                currency:paymentresponse.currency,
                amount:paymentresponse.amount,
                message:"payment completed "
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success:false,
                message:"some error ocuured during payment ::"+error.message
            })
        }


    } catch (error) {
        
    }
};



exports.verifysignature=async(req,res)=>{
    try {
        const webhooksecret="123456789";
        const signature=req.headers["x-razorpay-signature"];
        
        const shasum=crypto.createHmac("sha256",webhooksecret);
        shasum.update(JSON.stringify(req.body));
        const digest=shasum.digest("hex"); 

        if(signature==digest){
            console.log("payment authorised");

            const {courseid,user_id}=req.body.payload.payment.entity.notes;

           try {
                const enrolledcourse=await course.findByIdAndUpdate({_id:courseid},{
                    $push:{
                        StudentsEnrolled:user_id
                    }},
                    {new:true}, 
                );
                if(!enrolledcourse){
                    return res.status(500).json({
                        success:false,
                        message:"course not found"
                    });

                }   
                console.log(enrolledcourse);
                const enrolledstudent=await user.findByIdAndUpdate({_id:user_id},{
                    $push:{
                        courses:courseid
                    }},
                    {new:true}, 
                );
                console.log(enrolledcourse);

                    // sending mails

                 const emailresponse=await mailsender(enrolledstudent.email,"congratulations you are on boarded","congratulations to notion");
                 console.log(emailresponse);
                 return res.status(200).json({
                    success:true,
                    message:"signature verified and course added"
                 });   


            } catch (error) {
                console.log(error.message);
                res.status(400).json({
                    success:false,
                    message:"some error occured"+error.message
                 });
            }


        }
        else{
            res.status(400).json({
                success:false,
                message:"signature not matched"
             })
        }
    } catch (error) {
        res.status(200).json({
            success:false,
            message:"some error occured"+error.message
         })
    }
}