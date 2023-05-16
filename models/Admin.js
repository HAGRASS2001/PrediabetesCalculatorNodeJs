const { Schema, model } = require('mongoose');

const AdminSchema = new Schema({
    username: {
      type: 'String',
      required: true
    },
    password: {
      type: 'String',
      required: true
    },
    name: {
      type: 'String',
      required: true
    },
    age: {
      type: 'string',
      required: true
    },
    gender: {
      type: 'string',
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
    address: {
        type: 'string',
        required: true
    },
    role: {
      type: 'string',
      required: true
    }
});

const AdminModel = model('admin', AdminSchema);

module.exports = AdminModel;