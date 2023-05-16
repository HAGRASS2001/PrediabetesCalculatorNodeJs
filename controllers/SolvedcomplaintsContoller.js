const SolvedcomplaintsService = require('../services/SolvedcomplaintsService');

module.exports.addSolution = async (req, res) => {
  try {
    const solutionInfo = {
        solution: req.body.solution,
        solved: req.body.solved,
        complaintID: req.body.complaintID
      };
    const createdSolution = await SolvedcomplaintsService.addNewSolution(solutionInfo);
    return res.status(201).send({
      msg: 'Solution added successfully.',
      feedbackID: createdSolution._id
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.findsolutionByComplaintID = async (req, res) => {
  try {
    const complaintID = req.params.complaintID;
    const Solvedcomplaint = await SolvedcomplaintsService.findsolutionByComplaintID(complaintID);
    return res.send(Solvedcomplaint);
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.updateFeedback = async (req, res) => {
  try {
    const feedbackInfo = {
        rating: req.body.rating,
        comment: req.body.comment,
        userID: req.params.userID
      };
    const updated = await SolvedcomplaintsService.updateFeedback(feedbackInfo);
    return res.status(201).send({
      msg: 'Feedback updated successfully.',
      adminID: updated._id
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.findFeedbackById = async (req, res) => {
  try{
    const feedbackID = req.params.feedbackID;
    const findByID = await SolvedcomplaintsService.findfeedbackById(feedbackID);
    return res.send({findByID});
  }catch(err){
    return res.status(500).send({
      error:  err.message
    });
  }
};