const express = require("express")


const route = express.Router();
const {handleGetAllUsers,  handleGetUserById,handleUpdateGetUserById, handleDeleteGetUserById,handleCreateNewUser} = require("../controlles/user")


route.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

route.route("/:id")
.get( handleGetUserById)
.patch(handleUpdateGetUserById)
.delete(handleDeleteGetUserById); 


module.exports = route;