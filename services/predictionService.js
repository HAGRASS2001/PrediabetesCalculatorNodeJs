const { ObjectId } = require('mongoose').Types;
const predictionModel = require('../models/Prediction');

module.exports.FindAllPredictions = async () => {
    try{
        const predictions = await predictionModel.find();
        return predictions;
    }catch (err){
        throw new Error('can not font any predictions');
    }
};

module.exports.addNewprediction = async (predictionInfo) => {
    try {
      const predition = new predictionModel({
        Pregnancies: predictionInfo.Pregnancies,
        Glucose: predictionInfo.Glucose,
        BloodPressure: predictionInfo.BloodPressure,
        SkinThickness: predictionInfo.SkinThickness,
        Insulin: predictionInfo.Insulin,
        BMI: predictionInfo.BMI,
        DiabetesPedigreeFunction: predictionInfo.DiabetesPedigreeFunction,
        Age: predictionInfo.Age,
        Outcome: predictionInfo.Outcome,
        userID: new ObjectId(predictionInfo.userID)
      });
      const createdPrediction = await predition.save();
      return createdPrediction;
    } catch (err) {
      throw new Error('Could not create prediction.');
    }
};

module.exports.findPredictionByUserId = async (userID) => {
  try {
    const predictions = await predictionModel.find({userID: userID});
    return predictions;
  } catch (err) {
    throw new Error('Could not find prediction.');
  }
};