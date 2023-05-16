// import Express Router from express
const {Router} = require('express');

// import our Controllers
const predictionController = require('../controllers/predictionController');

const predictionRouter = Router();

predictionRouter.post('/makePrediction', predictionController.addNewPrediction);

predictionRouter.get('/getPredictions', predictionController.getAllPrediction);

predictionRouter.get('/getAllPredictionsPerUser/:userID', predictionController.findPredictionByUserId);



// export the router instance we created.
module.exports = predictionRouter;