const mongoose=require('mongoose');
require('dotenv');
exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("connecction to the server established");
    })
    .catch((error)=>{
        console.log("some error occured during connecting to the server"+error.message);
    });
}