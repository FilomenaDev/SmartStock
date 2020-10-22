const express = require("express")
const routa = express.Router()
const usercontroller = require("../Controllers/UserController")
const addresscontroller = require("../Controllers/AddressController")

routa.post('/createuser',usercontroller.store)
routa.post('/users',usercontroller.index)
routa.post('/forgot_password',usercontroller.SendResentLink)
routa.post('/reset_password/:token',usercontroller.resentPassword)
routa.post('/createuser/:UserId/address',addresscontroller.createAddres)
routa.get('/createuser/:UserId/address',addresscontroller.AllAddres)


module.exports = routa