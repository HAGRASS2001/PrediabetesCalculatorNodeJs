const { Schema, model } = require('mongoose');

const complaintSchema = new Schema({
    problemDescrption: {
      type: 'String',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    phoneNumber: {
        type: 'number',
        required: true
    },
    userID: {
        type: 'string',
        required: true
    }
});

const FeedbackModel = model('complaint', complaintSchema);

module.exports = FeedbackModel;