const mongoose=require('mongoose');
const courseprogressschema=new mongoose.Schema({
    course_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"course"
    },
    completed_video:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'subsection'
    }
});
model.exports=mongoose.model("Courseprog",courseprogressschema);