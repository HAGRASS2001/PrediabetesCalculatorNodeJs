const complaintService = require('../services/complaintservices');

module.exports.addNewComplaint = async (req, res) => {
  try {
    const complaintInfo = {
        problemDescrption: req.body.problemDescrption,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        userID: req.params.userID
      };
    const createdcomplaint = await complaintService.addNewComplaint(complaintInfo);
    return res.status(201).send({
      msg: 'Complaint added successfully.',
      complaintID: createdcomplaint._id
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await complaintService.FindAllcomplaints();
    return res.send(complaints);
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.UpdateComplaint = async (req, res) => {
  try {
    const complaintInfo = {
        problemDescrption: req.body.problemDescrption,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        userID: req.params.userID
      };
    const updated = await complaintService.UpdateComplaint(complaintInfo);
    return res.status(201).send({
      msg: 'Complaint updated successfully.',
      adminID: updated._id
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.findDoctorById = async (req, res) => {
  try{
    const complaintID = req.params.complaintID;
    const findByID = await complaintService.findDoctorById(complaintID);
    return res.send({findByID});
  }catch(err){
    return res.status(500).send({
      error:  err.message
    });
  }
};