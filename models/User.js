'use strict';
const {DataTypes, Sequelize}=require("sequelize")
const Model = Sequelize.Model

class User extends Model{
  static init(sequelize){
    super.init({
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      token:DataTypes.STRING 
    },{ sequelize
    })
  }
  static associate(models){
    models.User.hasMany(models.Address,{foreignkey:'user_Id',as:'Addresses'})
}
}


module.exports = User