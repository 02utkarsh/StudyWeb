const course=require('../models/course');
const category=require('../models/category');
const user=require('../models/users');
const {uploadimagetocloudinary}=require('../utils/imageupload');

exports.createcourse=async(req,res)=>{

    // console.log("haaanji aagye");
    try {
        const {coursename,description,whatYouWillLearn,price,tags,categorys}=req.body;
        const thumbnail=req.files.thumbnailimage;
    if(!coursename||!description||!whatYouWillLearn||!price||!tags||!categorys){   
        res.status(401).json({
            success:false,
            message:"data not completely filled please complete the all deatils"
        });
    }
    const userid=req.user.id;
    const instructorDetails=await user.findById(userid);
    // console.log(instructorDetails);
    if(!instructorDetails){
        res.status(401).json({
            success:false,
            message:"instructor not find "
        });}
    console.log("the instruction details are: ",instructorDetails);

    const tagdetails = await category.findOne({name:categorys});
    console.log(tagdetails);
    if(!tagdetails){
        res.status(401).json({
            success:false,
            message:"tag invalid"
        });
    }
    const thumbnailimages=await uploadimagetocloudinary(thumbnail,process.env.FOLDERNAME);

    const newcourse=await course.create({
        coursename,
        description,
        instructor:instructorDetails._id,
        whatYouWillLearn:whatYouWillLearn,
        price,
        category:tagdetails._id,
        thumbnail:thumbnailimages.secure_url
    });
    // console.log(new)
    await user.findByIdAndUpdate(
        {_id:instructorDetails._id},
        {
            $push:{
                courses:newcourse._id,
            }
        },
        {new:true}
    );

        res.status(200).json({
            success:true,
            message:"the course has been created successfully",
            data:newcourse
        })

    
} catch(error) {
    res.status(500).json({
        success:false,
        message:"some error occured"+error.message,
    });
    }
}


exports.showallcourses=async(req,res)=>{
    try {
        const allcourse=await course.find({},{
            coursename:true,
            course_content:true,
            thumbnail:true,
            instructor:true,
            ratingAndReview:true,
            StudentsEnrolled:true
        }).populate("instructor").exec();
        res.status(200).json({
            success:true,
            message:"all courses fetched successfully :",
            data:allcourse,
        })
    } catch (error) {
        
    }
}






exports.getcoursedeatils=async(req,res)=>{
    try {
        const {courseid}=req.body;
        const coursedeatils=await course.findById({courseid})
                                        .populate({
                                            path:"instructor",
                                            populate:{
                                                path:"additional details"
                                            },
                                        })
                                        .populate("category")
                                        .populate("rating")
                                        .populate({
                                            path:"course_content",
                                            populate:{
                                                path:subSection
                                            },
                                        })
                                        .exec();
 
        if(!coursedeatils){
            return res.status(400).json({
                success:false,
                message:`could not find the id with the given id ${courseid}`
            })
        }
        else{
            return res.status(200).json({
                success:"true",
                message:"course details fetched successfully",
                data:coursedeatils
            });
        }
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:'some error occured : '+error.message,
        })
    }
}