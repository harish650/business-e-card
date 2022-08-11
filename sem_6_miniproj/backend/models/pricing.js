const mongoose=require("mongoose")


const Pricingschema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    dis:{
        type:String,
        required:true
    }
  
})






module.exports=mongoose.model("Pricing",Pricingschema)
