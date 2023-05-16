// import Express Router from express
const {Router} = require('express');

// import our Controllers
const SolvedcomplaintsController = require('../controllers/SolvedcomplaintsContoller');

const SolvedcomplaintsRouter = Router();

SolvedcomplaintsRouter.post('/createSolution', SolvedcomplaintsController.addSolution);
SolvedcomplaintsRouter.get('/Solvedcomplaint/:complaintID', SolvedcomplaintsController.findsolutionByComplaintID);


// export the router instance we created.
module.exports = SolvedcomplaintsRouter;