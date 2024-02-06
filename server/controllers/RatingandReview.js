const ratingAndReview=require('../models/ratingAndReview');
const course=require('../models/course');
const { default: mongoose } = require('mongoose');


exports.createrating=async(req,res)=>{
    try {
        const userid=req.signuser.id; 
        const {rating,review,courseid}=req.body;

        const coursedetails=await course.findOne(
            {_id:courseid,
            StudentsEnrolled:{$elemMatch:{$eq:userid}}
            });

        if(!courseddetails){
            return res.status(400).json({
                success:false,
                message:"student not enrolled in the course"
            })
        }


        const alreadyregistered=await ratingAndReview.findById({
            course:courseid,
            user:userid
        });
        if(alreadyregistered){
            return res.status(400).json({
                success:true,
                message:"already review given"
            });
        }
        const maderating=await ratingAndReview.create({
            rating,
            review,
            course:courseid,
            user:userid
        });
        const updatedcoursedetail=await course.findByIdAndUpdate({_id:courseid},
            {
                $push:{
                    ratingAndReview:maderating._id,
                }
            },
            {new:true}
        );
        console.log(updatedcoursedetail);
        return res.status(200).json({
            success:true,
            message:"rating created successfully ",
            data:maderating
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"some error occured"+error.message,
        });
    }
}


exports.getaverageRating=async(req,res)=>{
    try {
        const {courseid}=req.body;
        
        const result=await ratingAndReview.aggregate([
            {
                $match:{
                    course:new mongoose.Types.ObjectId(courseid),
                }
            },
            {
                $group:{
                    _id:null,
                    averageRating:{$avg:"$rating"}
                }
            }
        ]);
        if( result.length>0){
            return res.status(200).json({
                success:true,
                averageRating:result[0].averageRating,
            })
        }
        
    }catch(error) {
        return res.status(500).json({
            success:false,
            message:"some error occured "+error.message,
        });
    }
}



exports.findallreview=async(req,res)=>{
    try {
        const allreview= await ratingAndReview.find({})
                            .sort({rating:"desc"})
                            .populate({
                                path:"user",
                                select:"firstName lastName"
                            })
                            .populate({
                                path:"course",
                                select:"coursename"
                            })
                            .exec();
        return res.status(200).json({
            succes:true,
            message:"all review fteched successfully",
            data:allreview
        })
    } catch (error) {
        return res.status(500).json({
            succes:false,
            message: "some error occured"+error.message,
        })
    }
}