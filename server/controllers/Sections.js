const section=require('../models/section');
const course=require('../models/course');
exports.createsection=async(req,res)=>{
    try {
        const {sectionname,courseid}=req.body;

        if(!sectionname||!courseid){
            res.status(500).json({
                success:false,
                message:"plaese fill all the details completely"
            })
        }
        const newsection=await section.create({sectionname});
        const updateddetails=await course.findByIdAndUpdate(
                    courseid,
                    {
                        $push:{
                            course_content:newsection
                        }
                    },
                    {new:true}
        ).populate("course_content");
        res.status(200).json({
            success:true,
            message:"entry created successsfully",
            data:updateddetails
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"some error occured during the creating the section",
            error:error.message
        })
    }
}

exports.updatesection=async(req,res)=>{
    try {
        const {sectionname,sectionid}=req.body;
        if(!sectionname||!sectionid){
            res.status(500).json({
                success:false,
                message:"plaese fill all the details completely"
            });
        }      
        
        const sectionupdated=await section.findByIdAndUpdate(sectionid,{sectionname},{new:true});
        res.status(200).json({
            success:true,
            message:'section updated successfully',
            data:sectionupdated
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"unable to update the course",
            error:error.message
        })
    }
}




exports.deletesection=async(req,res)=>{
    try {
        const {sectionid}=req.params;
        const deletesection=await section.findByIdAndDelete(sectionid)
        return res.status(200).json({
            success:true,
            message:"entry deleted successfully",
            data:deletesection
        });
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"unable to delete th entry in the section"
        })        
    }
}