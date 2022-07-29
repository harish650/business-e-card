const express=require("express")
const app=express()
const Post = require('./models/Post')
const mongoose=require("mongoose")
const Register=require("./models/Register")
const bodyParser=require("body-parser")
// const JSONArray=require("org.json.simple.JSONArray")
mongoose.connect("mongodb+srv://harish:Hrish%40123@cluster0.j1j7m.mongodb.net/LOGIN?retryWrites=true&w=majority",

(a)=>console.log(a));
app.use(bodyParser.json())

app.get("/datas",async(req,res)=>{
    const post=await Post.find() 
    const obj=[]
    for(let id in post){
      obj.push(post[id].username)    }
      res.send(obj)
})
app.post("/login",async(req,res)=>{
   // console.log(req.body);
   // res.send(req.body.username);
   const reg=await Register.find() 
   let flag=0;
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
app.listen(4000)