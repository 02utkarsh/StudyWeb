const mongoose=require("mongoose");
const category=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true
    },
    course:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'course'
    }]
});
module.exports=mongoose.model('category',category);



// i have changed the name of the tagschema to the category