const { Schema, model } = require('mongoose');

const Solvedcomplaints = new Schema({
    solution: {
      type: 'string',
      required: true
    },
    solved: {
      type: 'boolean',
      required: true
    },
    complaintID: {
        type: 'string',
        required: true
    }
});

const SolvedcomplaintsModel = model('Solvedcomplaints', Solvedcomplaints);

module.exports = SolvedcomplaintsModel;