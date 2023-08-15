const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({

    firstName:String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    mobileNo: { type: String, required: true, unique: true }
});

const user=mongoose.model('user',userSchema);

module.exports=user;