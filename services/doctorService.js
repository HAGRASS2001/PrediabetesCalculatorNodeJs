const { ObjectId } = require('mongoose').Types;
const DoctorModel = require('../models/Doctor');

module.exports.FindAllDoctors = async () => {
    try{
        const doctors = await DoctorModel.find();
        return doctors;
    }catch (err){
        throw new Error('can not font any doctors');
    }
};

module.exports.addNewDoctor = async (doctorInfo) => {
    try {
      const doctor = new DoctorModel({
          name: doctorInfo.name,
          age: doctorInfo.age,
          gender: doctorInfo.gender,
          email: doctorInfo.email,
          phoneNumber: doctorInfo.phoneNumber,
          address: doctorInfo.address,
          clinicNumber: doctorInfo.clinicNumber,
          workinghours: doctorInfo.workinghours
      });
      console.log(doctorInfo);
      const createdDoctor = await doctor.save();
      return createdDoctor;
    } catch (err) {
      throw new Error('Could not create doctor.');
    }
};

module.exports.findDoctorById = async (doctorID) => {
  try {
    const doctor = await DoctorModel.findById(doctorID);
    return doctor;
  } catch (err) {
    throw new Error('Could not find doctor.');
  }
};

module.exports.modifyDoctorInfo = async (doctor) => {
  try{
    const status = await DoctorModel.findByIdAndUpdate(doctor._id, doctor);
    return status;
  }catch(err){
    throw new Error('can not modify doctor');
  }
};

module.exports.deleteDoctor = async (doctorID) => {
  try{
    const status = await DoctorModel.findByIdAndDelete(doctorID);
    return status;
  }catch(err){
    throw new Error('can not delete doctor');
  }
};

