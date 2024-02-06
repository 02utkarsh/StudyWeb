const subsection=require('../models/subsection');
const section=require('../models/section');
const { uploadimagetocloudinary } = require('../utils/imageupload');

exports.createsubsection=async(req,res)=>{
    try {
        const {sectionid,title,timeduration,description}=req.body;
        const video =req.files.videofile;
        if(!sectionid||!title||!timeduration||!description||!video){
            return res.status(400).json({
                success:false,
                message:"please complete the full enteries"
            });
        }

        const uploaddetails=await uploadimagetocloudinary(video,process.env.FOLDER_NAME);
        const subsectiondetails=await subsection.create({
            title:title,
            timeduration:timeduration,
            description:description,
            videourl:uploaddetails
        });

        const updatedsection=await section.findByIdAndUpdate({_id:sectionid},{
            $push:{
                subsection:subsectiondetails._id,
            }},
            {new:true}
        );
        res.status(200).json({
            success:true,
            message:"entry created successfully",
            
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"some error"+error.message,
            
        })
    }
}

exports.updateSubSection=async(req,res)=>{
    try {
        const {subsectionid,sectionid,title,timeduration,description}=req.body;
        const uploaddetails=await uploadimagetocloudinary(video,process.env.FOLDER_NAME);
        const video =req.files.videofile;

        const subsecupdated=await subsection.findOneAndUpdate(subsectionid,{
            title:title,
            description:description,
            timeduration:timeduration,
            videourl:uploaddetails.secure_url
        },
        {new:true}
        );
        const mainsectionupdate=await section.findByIdAndUpdate({_id:sectionid},{
            $push:{
                subsection:subsecupdated._id,
            }
        },
        {new:true});
        
        return res.status(200).json({
            succss:true,
            message:"entry in the database created successfully",
            data:mainsectionupdate
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            succss:false,
            message:"some error occured",
        })
    }
}


exports.deleteSubSection=async(req,res)=>{
    try {
        const{subsectionid}=req.body;
        const subsecdeletion=await subsection.findByIdAndDelete(subsection);
        return res.status(200).json({
            success:true,
            message:"subsectiondeloeted successfully",
            data:subsecdeletion
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"unable to delete the subsection"
        })
    }
}