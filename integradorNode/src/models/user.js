//-------------------------------------------------------------------------------------------------
//------------------------------ MODELO USERS ----------------------------------------------------
//-------------------------------------------------------------------------------------------------

// modulos importados

const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config');

//---------------------------------------------------------------------------------------
// configuración

class User extends Model {
  
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // lastname: {
  //   type: DataTypes.STRING
  // },
  // email: {
  //   type: DataTypes.STRING
  // },
  password:{
    type: DataTypes.STRING
  }
}, {
  sequelize: dbInstance,
  modelName: 'User',
  createdAt: false,
  updatedAt: false
})

//---------------------------------------------------------------------------------------
// modulos exportados

module.exports = { User }