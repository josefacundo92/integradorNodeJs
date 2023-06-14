//-------------------------------------------------------------------------------------------------
//-----------------------------SEQUELIZE CONFIG----------------------------------------------------
//-------------------------------------------------------------------------------------------------

// modulos importados

const {Sequelize} = require('sequelize')

//---------------------------------------------------------------------------------------
// configuración

const dbInstance = new Sequelize({
    host: "localhost",
    database: "integrador",
    username: "root",
    password: "",   // sin espacio sino da error
    dialect: "mysql"
});

//---------------------------------------------------------------------------------------
// modulos exportados

module.exports = {dbInstance}

