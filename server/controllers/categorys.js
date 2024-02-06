const category=require("../models/category");

exports.createcategory=async(req,res)=>{
    try {
        const {name,description}=req.body;
        if(!name||!description){
            return res.status(400).json({
                success:false,
                message:"please fill the complete details"
            });
        }
        const tagdetails= await category.create({
            name:name,
            description:description
        });
        return res.status(200).json({
            success:true,
            message:"tag created successfully",
            data:tagdetails
        }); 

    } catch (error) {
        res.status(500).json({
            success:false,
            message:'unable to create entry error : '+error.message
        })
    }
}







exports.showallcategory=async(req,res)=>{
    try {
         const allentry=await category.find({},{
            name:true,
            description:true
         });
         console.log(allentry);
         res.status(200).json({
            success:true,
            message:"all entry are fetched",
            data:allentry
         });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"some error occured during fetching the information",
         });
    }
}


exports.categorypagedetail=async(req,res)=>{
    try {
        const {categoryid}=req.body;
        const selectedcategory=await category.findById(categoryid).populate("courses").exec();
        if(!selectedcategory){
            res.status(404).json({
                success:false,
                message:"unable to fetch category courses"
            });
        }
        
        const differentcategory=await category.find({
            _id:{$ne:categoryid},
            }).populate("courses").exec();
        

            return res.status(200).json({
                success:true,
                message:"all courses had been fetched successfully",
                data:{
                    selectedcategory,
                    differentcategory
                }
            }
            );

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"some error occured "+error,
        })
    }
}
