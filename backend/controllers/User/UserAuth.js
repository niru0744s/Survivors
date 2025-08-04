const bcrypt = require("bcrypt");
const User = require("../../models/User");
const {randomInt} = require('crypto');

module.exports.generateOtp = async(req,res)=>{
    const {email} = req.body;

}

module.exports.login = async(req,res)=>{
    const {email,password} = req.body;
    const existUser = await User.find({email:email});
    if(!existUser){
        res.status(300).send({
            success:0,
            message:"Wrong Email address!",
        });
    };
    const empass = bcrypt.compare(password,existUser.password);
    if(!empass){
        res.status(300).send({
            success:0,
            message:"Wrong password!"
        });
    }
}