//-------------------------------------------------------------------------------------------------
//----------------------------- BOOK CONTROLLER ---------------------------------------------------
//-------------------------------------------------------------------------------------------------

// modulos importados

const bookService = require('../services/book-service') // importamos los servicios

//----------------------------------------------------------------------------------------
// configuración

async function getAllBook(req, res) {              // ** Seleccionar todos **
  const books = await bookService.getAll() 
  res.status(200).send(books)
}

async function getBookById(req, res, next) {       // ** Seleccionar por ID **
  const { id } = req.params;
  try {
    const book = await bookService.getById(id)
    res.status(200).send(book)
  } catch(error) {
    next(error)
  }  
}

async function createBook(req, res) {            // ** Crear **
  const { isbn, titulo, autor , year,library_id} = req.body;
  const book = await bookService.createBook(isbn, titulo, autor , year,library_id)
  res.status(200).send(book)
}

async function editBook(req, res) {            // ** Editar **
  const { id } = req.params
  const { isbn, titulo, autor , year,library_id , estado } = req.body;
  const book = await bookService.editBook(id,isbn, titulo, autor , year,library_id , estado)
  res.status(200).send(book)
}

async function deleteBook(req, res) {         // ** Eliminar **
  const { id } = req.params
  await bookService.deleteBook(id)
  res.status(200).send(`El LIBRO con el id ${id} ha sido eliminado exitosamente!`)
}


//----------------------------------------------------------------------------------------
// modulos exportados


module.exports = {getAllBook , getBookById , createBook , editBook, deleteBook} // exportamos controladores para usarlo en la rutas