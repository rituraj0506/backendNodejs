const express= require("express");
const app = express();
const port=process.env.PORT||3000;
const path=require("path");
const Formdata=require("./models/registers");
require("./db/conn");

console.log(__dirname);
const static_path= path.join(__dirname,"../views");
//console.log(static_path);
// app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({extended:false})); // form se data lene ke liye use hota hai
app.set("view engine","hbs");

app.post('/registers',async(req,res)=>{
  try{
   //console.log(req.body.firstname);
   //res.send(req.body);
   const password= req.body.password;
   const cpassword=req.body.confirmpassword;
    
   if(password == cpassword)
   {
     const registerEmployee= new Formdata({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        gender:req.body.gender,
        phone:req.body.phone,
        age:req.body.age,
        password:password,
        confirmpassword:cpassword,
     })
     const registered=await registerEmployee.save();
     res.status(201).render("index");
   }else{
    res.send("password not match");
   }

  }catch(error){
    res.status(400).send(error);
  }
})

// app.get("/", (req,res)=>{
//     res.render("index");
// });

app.listen(port,()=>{
    console.log(`listen to port no ${port}`);
})


