//-------------------------------------------------------------------------------------------------
//------------------------------------ INDEX ---------------------------------------------------
//-------------------------------------------------------------------------------------------------

// modulos importados

const express = require('express'); // importamos express
const libraryRoutes = require("./src/routes/library-route");// importamos las rutas
const bookRoutes = require("./src/routes/book-route");// importamos las rutas
const userRoutes= require("./src/routes/user-route")

const { errorHandlerMiddleware } = require('./src/middlewares/error-handler')
const { initializeAuthentication } = require('./src/auth/auth')

const { Library } = require('./src/models/library');
const { Book } = require('./src/models/book');


//----------------------------------------------------------------------------------
// configuraciones

const app = express();
const puerto = 5000; // definimos el puerto

initializeAuthentication()

app.use(express.json()); // para parsear el cuerpo de las peticiones


Library.hasMany(Book,{
    foreignKey: 'library_id',
   
})

Book.belongsTo(Library,{
    foreignKey: 'library_id',

})

Library.sync();
Book.sync();

//------------------------------------------------------------------------------------
// rutas
app.use('/user', userRoutes)
app.use('/library', libraryRoutes)
app.use('/book', bookRoutes)
app.use(errorHandlerMiddleware)


//------------------------------------------------------------------------------------
// puerto

app.listen(puerto,()=>{
    console.log(`se conecto con exito al puerto ${puerto}`); 
})
  



// QUEDE 1:09 CLASE 5

