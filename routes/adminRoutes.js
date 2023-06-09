// import Express Router from express
const {Router} = require('express');

// import our Controllers
const adminsController = require('../controllers/adminController');

const AdminRouter = Router();

AdminRouter.put('/updateAdmin', adminsController.updateAdminAccount);
AdminRouter.put('/forgetPassword', adminsController.forgetPassword);
AdminRouter.post('/register', adminsController.adminRegistration);
AdminRouter.get('/getAllAdmins', adminsController.getAllAdmins);
AdminRouter.get('/getAdminById/:adminID', adminsController.findadminById);
AdminRouter.get('/login/:username/:password', adminsController.Login);

// export the router instance we created.
module.exports = AdminRouter;

