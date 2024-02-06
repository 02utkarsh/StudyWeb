const mongoose=require('mongoose');
const sectionschema= new mongoose.Schema({
    sectionname:{
        type:String
    },
    subsection:
    [
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subsection"
        }
    ]
});
module.exports=mongoose.model("section",sectionschema);