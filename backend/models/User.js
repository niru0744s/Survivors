const mongoose = require("mongoose");
const newSchema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    profilePic:{
        URL:String,
    },
    otp:{
        type:String,
    },
    token:{
        type:String,
        require:true,
        default:"",
    },
    wallet:{
        type:String,
        require:true,
        default:"0"
    },
    ffUid:{
        type:String,
        unique:true,
    },
    bgmiUid:{
        type:String,
        unique:true,
    }
    ,
    transactionHistory:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Transactions"
    }],
},{
    timestamps:true,
});

const User = mongoose.model("User",newSchema);
module.exports = User;