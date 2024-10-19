var express = require('express');
var router = express.Router();
const {handleGetAllUsers, handleGetuserById,handleUpdateUserById, handleDeleteUserById, handleCreateNewUser, handleGetHtmlData} = require('../controllers/user');


/* GET users listing. */
router.get("/api/", handleGetHtmlData)
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser)
router.route("/:id")
.get(handleGetuserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)


module.exports = router;
