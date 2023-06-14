//-------------------------------------------------------------------------------------------------
//----------------------------------- USER ROUTES ----------------------------------------------
//-------------------------------------------------------------------------------------------------

// modulos importados
const express = require('express')
const userController = require('../controllers/user-controller')
const { isAuthenticated } = require('../middlewares/authentication')

//----------------------------------------------------------------------------------------
// configuración
const router = express.Router()
router.get("/obtener-todos",isAuthenticated,userController.getAllUsers)
router.get("/obtener-por-id/:id", isAuthenticated, userController.getUserById)
router.post("/crear", isAuthenticated, userController.createUser)
router.put("/editar/:id",isAuthenticated, userController.editUser)
router.delete("/eliminar/:id",isAuthenticated, userController.deleteUser)
router.post("/login", userController.login)

//---------------------------------------------------------------------------------------
// modulos exportados
module.exports = router