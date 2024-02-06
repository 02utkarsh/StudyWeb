const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
        required:true
    },
    lastname:{
        type:String,
        trim:true,
        required:true

    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true,
    },
    accounttype:{
        type:String,
        trim:true,
        enum:["Admin","Instructor","Student"]
    },
    additionaldetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
        
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course",
            
        }
    ],
    image:{
        type:String,
        required:true
    },
    token:{
        type:String
    },
    resetpasswordexpires:{
        type:Date,
    },    
    courseprogress:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Courseprogress",   
        }
    ]
});
module.exports=mongoose.model("user",userschema);