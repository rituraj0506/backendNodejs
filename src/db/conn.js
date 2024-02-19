const mongoose= require("mongoose");

mongoose.connect("mongodb+srv://Restfulapi:Restfulapi@cluster0.ow2f4qc.mongodb.net/StudentData?retryWrites=true&w=majority"
).then(()=>{
    console.log("connection Success");
}).catch((e)=>{
    console.log("connection not Success");
})
