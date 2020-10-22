const Address = require("../models/Address")
const User = require("../models/User")

module.exports = {
    async createAddres(req,res){
      const {UserId}=req.params
      const {main,second}=req.body
      const user = await User.findByPk(UserId)
      if(!user){
          return res.status(400).json({erro:'user not found'})
      }
      const address = Address.create({UserId,main,second})  
      return res.json(address)
    },

    async AllAddres(req,res){
      const {UserId} = req.params
      const user = await User.findByPk(UserId,{
        include:{association:'Addresses',attributes:['main','second']},attributes:['username','password','email']
      })
     return res.json(user)
    },
}