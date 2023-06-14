//-------------------------------------------------------------------------------------------------
//----------------------------- LIBRARY SERVICE ---------------------------------------------------
//-------------------------------------------------------------------------------------------------

// modulos importados

const { Book } = require('../models/book')
const {Library} = require('../models/library') // importamos el library de la carpeta models


//----------------------------------------------------------------------------------------
// configuración

async function getAll(){
  
  const listLibraries = await Library.findAll({
    where:{    
      estado:"a"
    },
    include: [
      {
        model: Book,
        where: {
          estado: 'a'
        },
        required: false
      }
    ]
    })
    
  return listLibraries
}

async function getById(id) {
    const library = await Library.findByPk(id)  
    if (library == null) {
      throw new Error("Libreria no encontrada")
    }   
    return library
}

async function createLibrary(name, location, telefono) {
    const library = new Library()
  
    library.name = name
    library.location = location
    library.telefono = telefono
  
    const libraryCreated = await library.save()
    return libraryCreated
}

async function editLibrary(id ,name, location, telefono) {
  const library = await getById(id)
  if (name) {
    library.name = name
  }  
  if (location) {
    library.location = location
  }  
  if (telefono) {
    library.telefono = telefono
  }  
  const libraryEdited = await library.save()
  return libraryEdited
}

async function deleteLibrary(id) {
  const library = await getById(id)
  await library.destroy()
}

//---------------------------------------------------------------------------------------
// modulos exportados

module.exports = {getAll , getById , createLibrary, editLibrary , deleteLibrary}; // exportamos para usarlo en el controlador

