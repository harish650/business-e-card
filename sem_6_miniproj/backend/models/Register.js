const mongoose=require("mongoose")


const Registerschema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true 
    },
    mobileno:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true
    },
    repassword:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})






module.exports=mongoose.model("Register",Registerschema)
