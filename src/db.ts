
import mongoose, { Schema, model} from "mongoose";

mongoose.connect("mongodb://localhost:27017/brainly");


const userSchema = new Schema({
    username: { type:String, required:true ,unique:true,},
    password: {type: String, required: true}

})


// const contentType = ['image', 'article', 'audio', 'video']

// const contentSchema = new Schema({
//     title: String,
//     link: String,
//     tags: [{type: mongoose.Types.ObjectId, ref:'tag'}],
//     type: {type:String, enum:contentType, required: true},
//     userId: {type:mongoose.Types.ObjectId, ref:'User',required: true, unique:true }

//     })

//     const tagSchema = new Schema({
//         title:String
//     })

//     const linkSchema = new Schema({
//         hash:String,
//         userId:{type: mongoose.Schema.Types.ObjectId, ref:"User"}
        
//     })


    export const UserModel = model('User', userSchema );
    // export const ContentModel = mongoose.model('Content', 'contentSchema');
    // export const TagModel = mongoose.model('Tag', 'tagSchema');
    // export const LinkModel = mongoose.model('Link', 'linkSchema')

    