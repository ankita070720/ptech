const User = require("../models/user");

async function handleGetAllUsers(req,res){
    const  allDbUser = await User.find({});
    return res.json(allDbUser);
}
async function handleGetuserById(req,res){
    const user= await User.findById(req.params.id);
    console.log(user,"user");
    if(!user) return res.status(404).json({error:"user not found"});
    return res.json({status:"successfully find user by id",data:user});
}
async function handleUpdateUserById(req,res){
    const body= req.body;
    console.log(req,"body");
    await User.findByIdAndUpdate(req.params.id, {lastName:body.last_name});
    return res.json({status:"successfully updated"});
}
async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
  return res.json({status:"successfully deleted"});
}
async function handleCreateNewUser(req,res){
    const body= req.body;
  if(
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email_id ||
      !body.gender ||
      !body.job_title
  ){
      return res.status(400).json({msg:"All fielsd are requires"});

  }
 const result= await User.create({
      firstName:body.first_name,
      lastName:body.last_name,
      emaiId:body.email_id,
      gender:body.gender,
      jobTitle:body.job_title
  });
  console.log(result);
  return res.status(201).json({msg:"success", id:result._id})
}

async function handleGetHtmlData(req, res){
    const allDbUsers= await User.find({});
  const html=`
  <ul>
  ${allDbUsers.map((user)=> `<li>${user.firstName}-${user.lastName}  ${user.emaiId}</li>`).join(",")}

   </ul>
  `;
  res.send(html);
}
module.exports={
    handleGetAllUsers,
    handleGetuserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
    handleGetHtmlData
}