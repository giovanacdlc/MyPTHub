const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema(
  {
    name: {type: String, required: [true, 'Please add your full name']},
    dob: {type: Date, required: [true, 'Please add your date of birth']},
    username: {type: String, required: [true, 'Username must be at least 5 characters'], unique: true},
    password: {type: String, required: [true, 'Password must include a number']},
    mrn: {type: Number, required: [true, 'Please add your medical record number']},
    exercises: { type : Array , "default" : [] }
  }, {
    timestamps: true
  });

  const Patient = mongoose.model('Patient', patientSchema);

  const ptSchema = new Schema(
    {
      name: {type: String, required: [true, 'Please add your full name']},
      username: {type: String, required: [true, 'Username must be at least 5 characters'], unique: true},
      password: {type: String, required: [true, 'Password must include a number']},
    }, {
      timestamps: true
    });

  const PT = mongoose.model('PT', ptSchema);
  
  module.exports = {
    Patient, 
    PT,
  }
  // module.exports = mongoose.model('PT', ptSchema);
  // // module.exports = mongoose.model('Patient', patientSchema);