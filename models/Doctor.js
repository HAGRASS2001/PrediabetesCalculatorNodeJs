const { Schema, model } = require('mongoose');

const DoctorSchema = new Schema({
    name: {
      type: 'String',
      required: true
    },
    age: {
      type: 'String',
      required: true
    },
    gender: {
      type: 'String',
      required: true
    },
    email: {
      type: 'String',
      required: true
    },
    phoneNumber: {
      type: 'number',
      required: true
    },
    address: {
        type: 'String',
        required: true
    },
    clinicNumber: {
        type: 'number',
        required: true
    },
    workinghours: {
      openTime:{
        type: "String",
        required: true
      },
      closeTime: {
        type: "String",
        required: true
      }
    }
});

const DoctorModel = model('doctor', DoctorSchema);

module.exports = DoctorModel;