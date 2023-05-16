const { ObjectId } = require('mongoose').Types;
const complaintModel = require('../models/Complaint');

module.exports.FindAllcomplaints = async () => {
    try{
        const complaints = await complaintModel.find();
        return complaints;
    }catch (err){
        throw new Error('can not font any complaints');
    }
};

module.exports.addNewComplaint = async (complaintInfo) => {
    try {
      const complaint = new complaintModel({
        problemDescrption: complaintInfo.problemDescrption,
        email: complaintInfo.email,
        phoneNumber: complaintInfo.phoneNumber,
        userID: new ObjectId(complaintInfo.userID)
      });
      const createComplaint = await complaint.save();
      return createComplaint;
    } catch (err) {
      throw new Error('Could not create complaint.');
    }
};

module.exports.findComplaintById = async (complaintID) => {
  try {
    const complaint = await complaintModel.findById(complaintID);
    return complaint;
  } catch (err) {
    throw new Error('Could not find complaint.');
  }
};

module.exports.updateFeedback = async (complaint) => {
  try{
    const complaintt= await complaintModel.findByIdAndUpdate(complaint._id, complaint);
    return complaintt;
  }catch(arr){
    throw new Error('can not update complaint');
  }
};