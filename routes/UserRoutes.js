// import Express Router from express
const {Router} = require('express');

// import our Controllers
const UsersController = require('../controllers/userController');

const usersRouter = Router();

usersRouter.post('/register', UsersController.userRegistration);

usersRouter.get('/getAllUsers', UsersController.getAllUsers);

usersRouter.get('/login/:username/:password', UsersController.Login);

usersRouter.put('/UpdateUserAccount', UsersController.UpdateUserAccount);

usersRouter.get('/getUserById/:userID', UsersController.getuserByID);

usersRouter.put('/forgetPassword',UsersController.forgetPassword);

// export the router instance we created.
module.exports = usersRouter;