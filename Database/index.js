'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname+'/../config/config.json')[env];
const db = {};

const user = require("../models/User")
const address = require("../models/Address")

const sequelize = new Sequelize(config.database, config.username, config.password, config);


user.init(sequelize)
address.init(sequelize)
user.associate(sequelize.models)
address.associate(sequelize.models)


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
