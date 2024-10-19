const mongoose = require("mongoose");
mongoose.set("strictQuery", true);


async function handleConnectionDB(url){
  return mongoose.connect(url);
}


module.exports={
  handleConnectionDB,

}
