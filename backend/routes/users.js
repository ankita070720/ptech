var express = require('express');
var router = express.Router();
const {handleGetAllUsers} = require('../controllers/user');


/* GET users listing. */

router.post("/", async(req, res)=>{
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
  return res.status(201).json({msg:"success"})
});

router.get("/api/", async(req,res)=>{
  const allDbUsers= await User.find({});
  const html=`
  <ul>
  ${allDbUsers.map((user)=> `<li>${user.firstName}-${user.lastName}  ${user.emaiId}</li>`).join(",")}

   </ul>
  `;
  res.send(html);
})

router.get("/",async(req,res)=>{
 
})


router.route("/:id")
.get(async(req,res)=>{
  const user= await User.findById(req.params.id);
  console.log(user,"user");
  if(!user) return res.status(404).json({error:"user not found"});
  return res.json({status:"successfully find user by id",data:user});

})
.patch(async(req,res)=>{
  const body= req.body;
  console.log(req,"body");
  await User.findByIdAndUpdate(req.params.id, {lastName:body.last_name});
  return res.json({status:"successfully updated"});
})
.delete(async(req, res)=>{
  await User.findByIdAndDelete(req.params.id);
  return res.json({status:"successfully deleted"});
})


module.exports = router;
