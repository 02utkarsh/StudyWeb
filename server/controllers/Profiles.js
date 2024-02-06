const profile=require('../models/profile');
const user=require('../models/users');
require('dotenv').config();

exports.updateprofile=async(req,res)=>{
    try {
        const {dateofbirth="",about="",contactNumber,gender}=req.body;
        const id=req.user.id;


        if(!contactNumber||!gender||!id){
            res.status(404).json({
                success:false,
                message:"please fill thee complete details"
            })
        }
        const userdetails=await user.findById(id);
        const profileid= userdetails.additionaldetails;
        const profiledetails=await profile.findById(profileid);

        profiledetails.dateofbirth=dateofbirth;
        profiledetails.about=about;
        profiledetails.contactNumber=contactNumber;
        profiledetails.gender=gender;
        profiledetails.save();
        res.status(200).json({
            success:true,
            message:"profile updated successfully",
            data:profiledetails

        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"unable to update profile successfully",
        });
    }
}


exports.deleteaccount=async(req,res)=>{
    try {
        const id=req.user.id;
        
        const userdetails=await user.findById(id);
        if(!userdetails){
            res.status(404).json({
                success:false,
                message:"please fill thee complete details"
            })
        }
        await profile.findByIdAndDelete({_id:userdetails.additionaldetails});
        await user.findByIdAndDelete({_id:id});

        return res.status(200).json({
            success:true,
            message:"profile deleted successfully"
         })
    } catch (error) {
        
    }
}



exports.alluserdetails=async(req,res)=>{
    try {
        const id=req.user.id;
        console.log("the id details ARE ",id);
        const alldetail=await user.findById(id).populate("additionaldetails").exec();
        return res.status(200).json({
            success:true,
            message:"additional details saved successfully",
            data:alldetail
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success:false,
            message:"some error occured"+error.message,
        });
    }
}