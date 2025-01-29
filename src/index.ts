import express from "express";
const app = express();
import jwt from "jsonwebtoken"
import {UserModel} from "./db"

const Secret_key = "hi bharat";


app.use(express.json());
//@ts-ignore

// sign up end point
app.post("/api/v1/signup", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;


try {  
        await UserModel.create({
            username:username,
            password: password
        })
        res.json({msg: "user sucessfully signed up"})
        }

    catch(e){

        res.json({msg:"user already exist"})
    }

})

// sign in end point
app.get("/api/v1/signin", async(req,res)=>{
    
    const {username, password} = req.body;

    const existingUser =  await UserModel.findOne({
            username:username,
            password:password,
        })

    if(!existingUser) 
        {
        res.json({msg:"incorrect credentials"});
        }

        else{
        const token = jwt.sign({existingUser}, Secret_key)
        console.log("token is " + token);    
        res.json({ token:token})
        }
})

//content end point

app.post("/api/v1/content",function(req,res){

    res.send("hi there")
})

app.post("/api/v1/brain/share",function(req,res){

    res.send("hi there")
})



app.listen(3000);