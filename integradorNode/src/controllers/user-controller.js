//-------------------------------------------------------------------------------------------------
//----------------------------- USER CONTROLLER ---------------------------------------------------
//-------------------------------------------------------------------------------------------------

// modulos importados

const userService = require('../services/user-service')

//----------------------------------------------------------------------------------------
// configuración

async function getAllUsers(req, res) {

  const users = await userService.getAll()

  res.status(200).send(users)
}

async function getUserById(req, res, next) {
  const { id } = req.params;

  try {
    const user = await userService.getById(id)

    res.status(200).send(user)
  } catch(error) {
    next(error)
  }  
}

async function createUser(req, res) {
  const { name,password } = req.body;

  const user = await userService.createUser(name,password)

  res.status(201).send(user)
}

async function editUser(req, res) {
  const { id } = req.params
  const { name } = req.body;
  const { password } = req.body;

  const user = await userService.editUser(id, name, password)

  res.status(201).send(user)
}

async function deleteUser(req, res) {
  const { id } = req.params

  await userService.deleteUser(id)

  res.status(200).send(`Usuario con el id ${id} ha sido eliminado exitosamente!`)
}

async function login(req,res,next){
  const { name, password} = req.body

  try{
    const result= await userService.login(name, password);
    res.status(200).send(result)
  } catch(error){
    next(error)
  }
  
}

//----------------------------------------------------------------------------------------
// modulos exportados

module.exports = { getAllUsers, getUserById, createUser, editUser, deleteUser,login }