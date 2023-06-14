//-------------------------------------------------------------------------------------------------
//----------------------------------- BOOK ROUTES ----------------------------------------------
//-------------------------------------------------------------------------------------------------

// modulos importados

const express = require('express');
const bookController = require('../controllers/book-controller') // importamos controlador
const { isAuthenticated } = require('../middlewares/authentication')
//----------------------------------------------------------------------------------------
// configuración

const router = express.Router();
router.get("/obtener-todos", bookController.getAllBook)
router.get("/obtener-por-id/:id", bookController.getBookById)
router.post("/crear",isAuthenticated, bookController.createBook)
router.put("/editar/:id", isAuthenticated, bookController.editBook)
router.delete("/eliminar/:id",isAuthenticated, bookController.deleteBook)

//---------------------------------------------------------------------------------------
// modulos exportados

module.exports = router // exportamos el modulo rutas para usarlo en el index
