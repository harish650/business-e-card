const mongoose=require("mongoose")
const Admin_add_tempschema=mongoose.Schema({
  
      
    addedfile: {
        type:Object,
        required:true
    }, 
  


})


module.exports=mongoose.model("Admin_add_temp",Admin_add_tempschema)
