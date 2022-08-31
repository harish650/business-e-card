const mongoose=require("mongoose")
const Paymentlogsschema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
   

})


module.exports=mongoose.model("Payment_logs",Paymentlogsschema)
