const mongoose=require("mongoose");

const courseschema=new mongoose.Schema({
    coursename:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    whatYouWillLearn:{
        type:String,
        required:true
    },
    course_content:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"section"
        }
    ],
    ratingAndReview:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratingAndReview",        
    }
    ],
    price:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    tags:
        {
            type:String,
        }
    ,

    category:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"tag"
        }
    ],
    StudentsEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
        }
    ]
});
module.exports=mongoose.model("Course",courseschema);