//-------------------------------------------------------------------------------------------------
//------------------------------ MODELO LIBRARY ----------------------------------------------------
//-------------------------------------------------------------------------------------------------

// modulos importados

const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config');

//---------------------------------------------------------------------------------------
// configuración

class Library extends Model {  
}

Library.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,    
  },
  telefono: {
    type: DataTypes.STRING,    
  },
  estado: {
    type: DataTypes.STRING,    
  }     
 
}, {
  sequelize: dbInstance,
  modelName: 'library',
  createdAt: false,
  updatedAt: false,
  //paranoid: true
})

//---------------------------------------------------------------------------------------
// modulos exportados

module.exports = { Library }