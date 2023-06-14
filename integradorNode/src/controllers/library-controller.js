//-------------------------------------------------------------------------------------------------
//----------------------------- LIBRARY CONTROLLER ---------------------------------------------------
//-------------------------------------------------------------------------------------------------

// modulos importados

const libraryService = require('../services/library-service') // importamos los servicios

//----------------------------------------------------------------------------------------
// configuración

async function getAllLibrary(req, res) {              // ** Seleccionar todos **
  const libraries = await libraryService.getAll() 
  res.status(200).send(libraries)
}

async function getLibraryById(req, res, next) {       // ** Seleccionar por ID **
  const { id } = req.params;
  try {
    const library = await libraryService.getById(id)
    res.status(200).send(library)
  } catch(error) {
    next(error)
  }  
}

async function createLibrary(req, res) {            // ** Crear **
  const { name, location, telefono } = req.body;
  const library = await libraryService.createLibrary(name, location, telefono)
  res.status(200).send(library)
}

async function editLibrary(req, res) {            // ** Editar **
  const { id } = req.params
  const { name, location, telefono , estado} = req.body;
  const library = await libraryService.editLibrary(id ,name , location, telefono , estado)
  res.status(200).send(library)
}

async function deleteLibrary(req, res) {         // ** Eliminar **
  const { id } = req.params
  await libraryService.deleteLibrary(id)
  res.status(200).send(`La LIBRERIA con el id ${id} ha sido eliminado exitosamente!`)
}


//----------------------------------------------------------------------------------------
// modulos exportados

module.exports = {getAllLibrary , getLibraryById , createLibrary , editLibrary, deleteLibrary} // exportamos controladores para usarlo en la rutas

