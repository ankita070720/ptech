const User = require("../models/user");

async function handleGetAllUsers(req,res){
    const  allDbUser = await User.find({});
    return res.json(allDbUser);
}

module.exports={
    handleGetAllUsers,
}