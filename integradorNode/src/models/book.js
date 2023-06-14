//-------------------------------------------------------------------------------------------------
//------------------------------ MODELO BOOK ----------------------------------------------------
//-------------------------------------------------------------------------------------------------
// modulos importados
const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config');
const { Library } = require('./library');


//---------------------------------------------------------------------------------------
// configuración

class Book extends Model {  
}

Book.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  isbn:{
    type: DataTypes.INTEGER,    
  },
  titulo: {
    type: DataTypes.STRING    
  },
  autor: {
    type: DataTypes.STRING    
  },
  year: {
    type: DataTypes.INTEGER   
  },
  library_id: {
    type: DataTypes.INTEGER
  },
  estado: {
    type: DataTypes.STRING,    
  }   
 
}, {
  sequelize: dbInstance,
  modelName: 'book',
  createdAt: false,
  updatedAt: false,
  //paranoid: true
})

//---------------------------------------------------------------------------------------
// modulos exportados

module.exports = { Book }