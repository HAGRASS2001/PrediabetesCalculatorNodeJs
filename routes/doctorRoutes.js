// import Express Router from express
const {Router} = require('express');

// import our Controllers
const doctorController = require('../controllers/doctorController');

const doctorRouter = Router();

doctorRouter.put('/updateDoctor/:doctorID', doctorController.updateDoctorAccount);
doctorRouter.post('/addNewDoctor', doctorController.addNewDoctor);
doctorRouter.get('/getDoctorById/:doctorID', doctorController.findDoctorById);
doctorRouter.get('/getAllDoctors', doctorController.getAllDoctors);
doctorRouter.delete('/deleteDoctor/:doctorID', doctorController.deleteDoctorById);

// export the router instance we created.
module.exports = doctorRouter;