const predictionService = require('../services/predictionService');

module.exports.addNewPrediction = async (req, res) => {
  try {
    const PredictionInfo = {
        Pregnancies: req.body.Pregnancies,
        Glucose: req.body.Glucose,
        BloodPressure: req.body.BloodPressure,
        SkinThickness: req.body.SkinThickness,
        Insulin: req.body.Insulin,
        BMI: req.body.BMI,
        DiabetesPedigreeFunction: req.body.DiabetesPedigreeFunction,
        Age: req.body.Age,
        Outcome: req.body.Outcome,
        userID: req.body.userID
    };
    console.log(PredictionInfo);
    const createdPrediction = await predictionService.addNewprediction(PredictionInfo);
    return res.status(201).send({
      msg: 'prediction added successfully.',
      predictionID: createdPrediction._id
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.getAllPrediction = async (req, res) => {
  try {
    const prediction = await predictionService.FindAllPredictions();
    return res.send({prediction});
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.findPredictionByUserId = async (req, res) => {
  try{
    const userID = req.params.userID;
    const predictions = await predictionService.findPredictionByUserId(userID);
    return res.send({predictions});
  }catch(err){
    return res.status(500).send({
      error:  err.message
    });
  }
};