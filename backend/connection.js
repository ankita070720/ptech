const mongoose = require("mongoose");

async function connectionMongoDb(url){
  return (
  mongoose.connect(url)
  .then(()=>console.log("mongodb connected"))
  .catch(err=> console.log("error occured", err))  );
}
module.exports={
    connectionMongoDb,  
}