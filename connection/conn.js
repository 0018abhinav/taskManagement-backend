const mongoose = require("mongoose");

const conn = async()=>{
    try{
        const response  = await mongoose.connect("");
        if(response){
            console.log("DB connected");
        }
    }
    catch(error){
        console.log(error)
    }
};

conn();