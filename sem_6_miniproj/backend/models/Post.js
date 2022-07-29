const mongoose=require("mongoose")
const Postschema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    logintime:{
        type:String,
        required:true
    },
    logindate:{
        type:String,
        required:true
    }

})


module.exports=mongoose.model("Post",Postschema)
