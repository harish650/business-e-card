const mongoose=require("mongoose")
const Templatedetailsschema=mongoose.Schema({
   loginusername:{
type:String,
require:false
   },
      
    Contactno: {
        type:String,
        required:false
    }, 
    Firstname: {
        type:String,
        required:false
    },
     Lastname:{
        type:String,
        required:false
    } ,
     Email: {
        type:String,
        required:false
    },
     Whatsappno:{
        type:String,
        required:false
    },
     Address_line_1: {
        type:String,
        required:false
    },
     Address_line_2: {
        type:String,
        required:false
    },
     City: {
        type:String,
        required:false
    },
     State: {
        type:String,
        required:false
    }, 
    Pincode: {
        type:String,
        required:false
    },
     Country:{
        type:String,
        required:false
    },
     Facebookid: {
        type:String,
        required:false
    },
     Linkedinid: {
        type:String,
        required:false
    },
     Githubid: {
        type:String,
        required:false
    }, 
    Aboutus: {
        type:String,
        required:false
    },
     Branches: {
        type:String,
        required:false
    },
     Gpay: {
        type:String,
        required:false
    },
     Phonepay: {
        type:String,
        required:false
    },
     Paytm:{
        type:String,
        required:false
    },
     Netbanking: {
        type:String,
        required:false
    },
     credit_card: {
        type:String,
        required:false
    },
     Debit_card: {
        type:String,
        required:false
    },
    company_logo:{
        type:Object,
        required:false
    },
    product:{
        type:Array,
        required:false
    },  catalogue:{
        type:Object,
        required:false
    },
    selectes_template:{
        type:String,
        required:false
    },
    template_code:{
        type:String,
        required:false
    }



})


module.exports=mongoose.model("Template_details",Templatedetailsschema)
