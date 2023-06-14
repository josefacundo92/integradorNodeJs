//-------------------------------------------------------------------------------------------------
//----------------------------- BOOK SERVICE ---------------------------------------------------
//-------------------------------------------------------------------------------------------------

// modulos importados

const {Book} = require('../models/book') // importamos el library de la carpeta models

//----------------------------------------------------------------------------------------
// configuración

async function getAll(){
    const listBooks = await Book.findAll({
      where: {
        estado: "a"
    }
    })      

    return listBooks  
}

async function getById(id) {
    const book = await Book.findByPk(id)  
    if (book == null) {
      throw new Error("Libro no encontrado")
    }   
    return book
}


async function createBook(isbn, titulo, autor , year,library_id) {
    const book = new Book()
  
    book.isbn = isbn
    book.titulo = titulo
    book.autor = autor
    book.year = year
    book.library_id = library_id
    const bookCreated = await book.save()
    return bookCreated
}


async function editBook(id,isbn, titulo, autor , year,library_id,estado) {
  const book = await getById(id)
  if (isbn) {
    book.isbn = isbn
  }  
  if (titulo) {
    book.titulo = titulo
  }  
  if (autor) {
    book.autor = autor
  }
  if (year) {
    book.year = year
  }
  if (library_id) {
    book.library_id = library_id
  }
  if (estado) {
    book.estado = estado
  }       
  const bookEdited = await book.save()
  return bookEdited
}

async function deleteBook(id) {
  // const book = await getById(id)
  // await book.destroy()
  const book = await getById(id)
  book.estado = "E"

  const bookEdited = await book.save()
  return bookEdited
}

//---------------------------------------------------------------------------------------
// modulos exportados


module.exports = {getAll , getById , createBook, editBook , deleteBook}; // exportamos para usarlo en el controlador

