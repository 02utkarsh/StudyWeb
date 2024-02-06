const mongoose=require('mongoose');
const profileschema= new mongoose.Schema({
    gender:{
        type:String,
        enum:['male',"female","other"]
    },
    dateofbirth:{
        type:String
    },
    about:{
        type:String,
        trim:true
    },
    mobilenumber:{
        type:Number,
        trim:true
    }
});
module.exports=mongoose.model("Profile",profileschema);