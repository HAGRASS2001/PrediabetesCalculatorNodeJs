const { Schema, model } = require('mongoose');

const predictionSchema = new Schema({
    Pregnancies: {
        type: 'number',
        required: true
    },
    Glucose: {
        type: 'number',
        required: true
    },
    BloodPressure: {
        type: 'number',
        required: true
    },
    SkinThickness: {
        type: 'number',
        required: true
    },
    Insulin: {
        type: 'number',
        required: true
    },
    BMI: {
        type: 'number',
        required: true
    },
    DiabetesPedigreeFunction: {
        type: 'number',
        required: true
    },
    Age: {
        type: 'number',
        required: true
    },
    Outcome: {
        type: 'String',
        required: true
    },
    userID: {
        type: 'String',
        required: true
    }

});

const predictionModel = model('prediction', predictionSchema);

module.exports = predictionModel;