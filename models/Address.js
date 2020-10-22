'use strict';
const {DataTypes, Sequelize}=require("sequelize")
const Model = Sequelize.Model

class Address extends Model{
  static init(sequelize){
    super.init({
      main: DataTypes.INTEGER,
      second: DataTypes.INTEGER
    },{ sequelize
    })
  }
  static associate(models){
    models.Address.belongsTo(models.User,{foreignkey:'user_Id',as:'User'})
}
}


module.exports = Address