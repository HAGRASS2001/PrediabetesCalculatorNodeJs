const doctorService = require('../services/doctorService');

module.exports.addNewDoctor = async (req, res) => {
  try {
    const doctorInfo = {
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        clinicNumber: req.body.clinicNumber,
        workinghours: {
          openTime: req.body.openTime,
          closeTime: req.body.closeTime
        }
      };
    const createdDoctor = await doctorService.addNewDoctor(doctorInfo);
    return res.status(201).send({
      msg: 'Doctor added successfully.',
      UserID: createdDoctor._id
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await doctorService.FindAllDoctors();
    return res.send({doctors});
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.updateDoctorAccount = async (req, res) => {
  try {
    const id = req.params.doctorID;
    const doctorInfo = {
        _id: id,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        clinicNumber: req.body.clinicNumber,
        workinghours: {
          openTime: req.body.openTime,
          closeTime: req.body.closeTime
        }
      };
    const updated = await doctorService.modifyDoctorInfo(doctorInfo);
    return res.status(201).send({
      msg: 'Doctor updated successfully.',
      doctorID: updated
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.findDoctorById = async (req, res) => {
  try{
    const doctorID = req.params.doctorID;
    const findByID = await doctorService.findDoctorById(doctorID);
    return res.send(findByID);
  }catch(err){
    return res.status(500).send({
      error:  err.message
    });
  }
};

module.exports.deleteDoctorById = async (req, res) => {
  try{
    const doctorID = req.params.doctorID;
    const deleteById = await doctorService.deleteDoctor(doctorID);
    return res.send(deleteById);
  }catch(err){
    return res.status(500).send({
      error:  err.message
    });
  }
};
