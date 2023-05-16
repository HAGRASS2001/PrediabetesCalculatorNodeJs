const { ObjectId } = require('mongoose').Types;
const SolvedcomplaintsModel = require('../models/Solvedcomplaints');

module.exports.addNewSolution = async (solutionInfo) => {
    try {
      console.log(solutionInfo.complaintID);
      const solvedSolution = new SolvedcomplaintsModel({
        solution: solutionInfo.solution,
        solved: solutionInfo.solved,
        complaintID: new ObjectId(solutionInfo.complaintID)
      });
      const createsolution = await solvedSolution.save();
      return createsolution;
    } catch (err) {
      throw new Error('Could not create solution.');
    }
};

module.exports.findsolutionByComplaintID = async (complaintID2) => {
  try {
    const solvedSolution = await SolvedcomplaintsModel.findOne({
      complaintID: complaintID2
    });
    return solvedSolution;
  } catch (err) {
    throw new Error('Could not find feedback.');
  }
};

module.exports.updateSolution = async (feedback) => {
  try{
    const feedbackk= await SolvedcomplaintsModel.findByIdAndUpdate(feedback._id, feedback);
    return feedbackk;
  }catch(arr){
    throw new Error('can not update feedback');
  }
};