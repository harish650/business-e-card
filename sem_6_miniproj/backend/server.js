const express=require("express")
const app=express()
const Post = require('./models/Post')
const mongoose=require("mongoose")
const Register=require("./models/Register")
const bodyParser=require("body-parser")
const Template_details=require("./models/Template_details")
const Payment_logs=require("./models/Payment_logs")
const  Admin_add_temp =require("./models/Admin_add_temp")
const Pricing =require('./models/pricing')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const fileupload=require("express-fileupload")
const { convert } = require('html-to-text');
const { populate } = require("./models/Post")
// const JSONArray=require("org.json.simple.JSONArray")
mongoose.connect("mongodb+srv://harish:Hrish%40123@cluster0.j1j7m.mongodb.net/LOGIN?retryWrites=true&w=majority",

(a)=>console.log(a));
app.use(bodyParser.json())
var file_companu_logo=null;
var file_product=null;
var file_product_obj=[];
var file_catalogue=null;
var pricing_details=null;
var selected_template=null;
let loguser='';
var textt='';
app.set('view engine','ejs')

app.use(fileupload());

app.get("/datas",async(req,res)=>{
    const post=await Post.find() 
    const obj=[]
    for(let id in post){
      obj.push(post[id].username)    }
      res.send(obj)
})
app.post("/Template_details_rte_hlp",(req,res)=>{
    let v=req.body.title;
      textt = convert(v, {
        wordwrap: 1300000
      });
     res.json({text:textt})
     console.log(textt)
})
app.post("/template_details",async(req,res)=>{
console.log("SDds")
    // console.log(req.body.Contactno);
    // console.log(req.body.Email);
    // console.log(req.body.Whatsappno);
    // console.log(req.body.Address_line_1);
    // console.log(req.body.City);

    // console.log(req.body.Facebookid);
    // console.log(req.body.Linkedinid);
    // console.log(req.body.Githubid);
    // console.log(req.body.Aboutus);
    // console.log(req.body.Branches);
    // console.log(req.body.Gpay);
    // console.log(req.body.Phonepay);
    // console.log(req.body.Paytm);
    // console.log(req.body.Netbanking);
    // console.log(req.body.credit_card);
    // console.log(req.body.Debit_card);
     console.log(req.body.company_logo);

      

    const temp=new Template_details({
        loginusername:loguser,
        Contactno: req.body.Contactno,
        Firstname: req.body.Firstname, Lastname:req.body.Lastname, 
        Email: req.body.Email,
        Whatsappno: req.body.Whatsappno,
        Address_line_1: req.body.Address_line_1,
        Address_line_2: req.body.Address_line_2,
        City:req.body.City,
         State: req.body.State, Pincode:req.body.Pincode, Country: req.body.Country,
          Facebookid: req.body.Facebookid, 
          Linkedinid:req.body.Linkedinid,
           Githubid: req.body.Githubid, 
           Aboutus:textt, 
           Branches:req.body.Branches, 
           Gpay:req.body.Gpay, 
           Phonepay: req.body.Phonepay,
            Paytm: req.body.Paytm,
             Netbanking:req.body.Netbanking,
              credit_card: req.body.credit_card,
               Debit_card: req.body.Debit_card,
               company_logo: file_companu_logo,
               product:file_product_obj,
               catalogue:file_catalogue,
               selectes_template:selected_template,
               template_code:''
    });
    temp.save().then(re=>res.send(re));
    
    
})
// app.post("/image_sample",upload.single("temp4"),(req,res)=>{
//     console.log(req.body.name);
//     if(!req.body.file){
//         res.send("not ok")
//     }else{
//         res.send(req.body.file)
//     }
// })

app.post("/login",async(req,res)=>{
   // console.log(req.body);
   // res.send(req.body.username);
   const reg=await Register.find() 
   let flag=0;
   loguser=req.body.username;
for(let id in reg)
{
    if(reg[id].username ===req.body.username && reg[id].password=== req.body.password){ 
        var dates=new Date();
        //  let d=dates.split(" ")
        // var date=dates.getDate();
        // var month=dates.getMonth();
        // var year=dates.getYear();
        var fulldate=new Date().toISOString().split("T")
        var hr=dates.getHours();
        var mn=dates.getMinutes();
        var sec=dates.getSeconds();
        // let fulldate=date+":"+month+":"+year;
        let fulltime=hr+":"+mn+":"+sec;
        console.log(fulldate[0])


        //  console.log(dates)
    const post=new Post({


        // "logindate":"2022-05-20"
        // "logintime":"9:42:44"

        username:req.body.username,
        logindate:fulldate[0],
        logintime:fulltime,
        
    });
     post.save().then(a=>{res.sendStatus(200);console.log(a)});
    flag=1;
}}
  if(flag==0){res.sendStatus(400)}
})
app.post("/register",(req,res)=>{
    const reg=new Register({
        
        username:req.body.username,
        lastname:req.body.lastname,
        repassword:req.body.repassword,
        password:req.body.password,
        emailid:req.body.emailid,
        mobileno:req.body.phoneno,
        firstname:req.body.firstname,
        
    });
    reg.save().then(ack=>res.send(ack))

})
app.get("/chart",async (req,res)=>{
    const post=await Post.find({},{logindate:1,logintime:1}).sort({logindate:1});
     let obj=[];
    let post1=post;
    for (let id in post){
        if( post[id].logindate in obj){}else{
            let val=post[id].logindate;
            let count=0;
        for(let _id in post1){
         if (val==post1[_id].logindate){
          count=count+1;
         } 
        }
        var vallll={"logindate":val,"nofodays":count}
        let flag=0;
        for( let idd in  obj){
            if(vallll.logindate==obj[idd].logindate){
                flag=1;
            }
        }
        if(flag==0)
        {obj.push(vallll)}
        else{flag=0}
    }}
    console.log(obj)
    res.json(obj);
    //  console.log(post["logintime"].split(" "))

})
app.get("/sample",(res,req)=>{
    req.send("jjj")
})

app.get("/adminpage_users",async(req,res)=>{
   const reg=await Register.find() 
 res.json(reg);
 console.log(reg);
})
app.get("/template_details_get",async(req,res)=>{
    const det=await Template_details.find({loginusername:"bharani"});
    console.log(loguser);

    // const det=await Template_details.find();
    res.send(det);
})
app.post("/image_sample",(req,res)=>{
    if(req.files===null){
        res.send("not ok")
    }
    else{
   file_companu_logo=req.files.file;
    file_companu_logo.mv(`${__dirname}/public/${file_companu_logo.name}`,err=>{console.log(err)});
    console.log(req.files.file.name);
    res.json({"su":"ok"})}
})

app.post("/product_image",(req,res)=>{
    if(req.files===null){
        console.log("not ok")
    }
    else{
   file_product=req.files.file;
   file_product_obj.push(req.files.file);
   console.log("obj",file_product_obj);
    file_product.mv(`${__dirname}/products/${file_product.name}`,err=>{console.log(err)});
    // console.log(req.files.file);
    console.log({"su":"ok"})}
})
app.post("/catalogue",(req,res)=>{
    if(req.files===null){
        res.send("not ok")
    }
    else{

   file_catalogue=req.files.file;
   file_catalogue.mv(`${__dirname}/catalogue/${file_catalogue.name}`,err=>{console.log(err)});
    console.log(req.files.file.name);
    res.json({"su":"ok"})}
})
app.post("/selected_template",(req,res)=>{
    selected_template=req.body.selected;
    console.log(selected_template)
})
app.post("/edittemp",async(req,res)=>{
    values=req.body.values
     const reg=await Template_details.updateOne({loginusername:loguser},{$set:{
        Contactno: req.body.Contactno,
        Firstname: req.body.Firstname, Lastname:req.body.Lastname, 
        Email: req.body.Email,
        Whatsappno: req.body.Whatsappno,
        Address_line_1: req.body.Address_line_1,
        Address_line_2: req.body.Address_line_2,
        City:req.body.City,
         State: req.body.State, Pincode:req.body.Pincode, Country: req.body.Country,
          Facebookid: req.body.Facebookid, 
          Linkedinid:req.body.Linkedinid,
           Githubid: req.body.Githubid, 
           Aboutus:textt, 
           Branches:req.body.Branches, 
           Gpay:req.body.Gpay, 
           Phonepay: req.body.Phonepay,
            Paytm: req.body.Paytm,
             Netbanking:req.body.Netbanking,
              credit_card: req.body.credit_card,
               Debit_card: req.body.Debit_card,
               company_logo: file_companu_logo,
               product:file_product_obj,
               catalogue:file_catalogue,
               selectes_template:selected_template,
               template_code:''}});
               const det=await Template_details.find({loginusername:loguser});
    res.send(det);
    
})

app.get("/get_selected_id",(req,res)=>{
    res.json({"val":selected_template})
})
app.get("/pricing_details",async(req,res)=>{
    // const temp=new Pricing({
    //     id:"6",
    //     price:"3200",
    //     dis:"30%"
    // }); temp.save().then(re=>res.send(re));
    
    pricing_details=await Pricing.find();
    res.json({"val":pricing_details})
})
app.post("/update_pricing_details",async(req,res)=>{
     const reg=await Pricing.updateOne({"_id":req.body.id},{$set:{"price":req.body.price,"dis":req.body.dis}});
//     console.log(req.body)
// console.log("id",req.body.id);
// console.log("amount",req.body.price);
// console.log("dis",req.body.dis);

})
app.post("/admin_add_template",async(req,res)=>{
    console.log(req.files.file);
    const  sav=await Admin_add_temp({
        addedfile:req.files.file
    });sav.save().then(re=>res.send(re));
})
app.get("/fetch_admin_add_temp",async(req,res)=>{
    const valllue=await Admin_add_temp.find({});
    res.json({"vv":valllue})
})
app.post("/payment_details",async(req,res)=>{
    console.log(req.body.price)
    const ddata=new Payment_logs({
        username:"harish",
        price:req.body.price
    });ddata.save().then(res=>console.log(res))
})
app.get("/get_pyment_details",async(req,res)=>{
    const pay_data=await Payment_logs.find();
    var total=0;
    for(let id in pay_data){
        total=parseInt(total)+parseInt(pay_data[id].price);
    }
    const dd=total.toString();
    res.json({"pay":dd})
})
app.listen(4000);