//-------------------------------------------------------------------------------------------------
//----------------------------- LIBRARY SERVICE ---------------------------------------------------
//-------------------------------------------------------------------------------------------------

// modulos importados

const { use } = require('passport')
const { User } = require('../models/user')
const jwt = require ('jsonwebtoken')

//----------------------------------------------------------------------------------------
// configuración

async function getAll() {
  const listUsers = await User.findAll()

  return listUsers
}

async function getById(id) {
  const user = await User.findByPk(id)

  if (user == null) {
    throw new Error("Usuario no encontrado")
  }

  return user
}

async function createUser(name,password) {
  const user = new User()

  user.name = name
  user.password = password

  const userCreated = await user.save()
  return userCreated
}

async function editUser(id, name,password) {
  const user = await getById(id)
  if (name) {
    user.name = name
  }   
  
  if (password) {
    user.password = password
  }  
  const userEdited = await user.save()
  return userEdited
}

async function deleteUser(id) {
  const user = await getById(id)
  await user.destroy()
}

async function login(name, password){
  const user = await User.findOne({
    where:{
    name:name,
    password: password		
    }
  })
  
  if(!user){
    throw new Error("Nombre y/o Pass incorrectos")
  }

  const token = jwt.sign({
    id: user.id,    
    name: user.name,
    password: user.password
  }, 	'ClaveUltraSecreta' )

  return{
    acessToken: token
  }

}

//---------------------------------------------------------------------------------------
// modulos exportados

module.exports = { getAll, getById, createUser, editUser, deleteUser , login }