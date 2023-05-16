// import Express Router from express
const {Router} = require('express');

// import our Controllers
const complaintsController = require('../controllers/complaintController');

const complaintRouter = Router();

complaintRouter.post('/createfeedback/:userID', complaintsController.addNewComplaint);

complaintRouter.get('/getAllcomplaints', complaintsController.getAllComplaints);


// export the router instance we created.
module.exports = complaintRouter;