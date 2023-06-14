//-------------------------------------------------------------------------------------------------
//----------------------------------- LIBRARY ROUTES ----------------------------------------------
//-------------------------------------------------------------------------------------------------

// modulos importados
const express = require('express');
const libraryController = require('../controllers/library-controller')
const { isAuthenticated } = require('../middlewares/authentication')
//----------------------------------------------------------------------------------------
// configuración
const router = express.Router();
router.get("/obtener-todos", libraryController.getAllLibrary)
router.get("/obtener-por-id/:id", libraryController.getLibraryById)
router.post("/crear",isAuthenticated, libraryController.createLibrary)
router.put("/editar/:id",isAuthenticated, libraryController.editLibrary)
router.delete("/eliminar/:id", libraryController.deleteLibrary)

//---------------------------------------------------------------------------------------
// modulos exportados
module.exports = router // exportamos el modulo rutas para usarlo en el index

