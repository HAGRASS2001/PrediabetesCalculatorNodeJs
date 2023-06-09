const adminService = require('../services/adminServices');
const bcrypt = require('bcrypt');

module.exports.adminRegistration = async (req, res) => {
  try {
    const adminInfo = {
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        role: req.body.role
      };
      
    const createdAdmin = await adminService.addNewAdmin(adminInfo);
    return res.status(201).send({
      msg: 'admin created successfully.',
      AdminID: createdAdmin._id
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await adminService.FindAllAdmins();
    return res.send(admins);
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.updateAdminAccount = async (req, res) => {
  console.log(res.body);
  try {
    const adminInfo = {
        _id: req.body.adminID,
        username: req.body.username,
        password: req.body.Newpassword,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        role: req.body.role
      };
      
    const admin = await adminService.findAdminById(adminInfo._id);


      if(adminInfo.password != ""){
        let hashedPassword = await bcrypt.hash(adminInfo.password, 12);
        let isCorrectPassword = await bcrypt.compare(req.body.password, admin.password);
        if(isCorrectPassword){
          adminInfo.password = hashedPassword;
          const updatedAccount = await adminService.updateAdminAccount(adminInfo);
          return res.status(201).send(true);
        }else{
          return res.send(false);
        }
      }else{
        let isCorrectPassword = await bcrypt.compare(req.body.password, admin.password);
        if(isCorrectPassword){
          adminInfo.password = admin.password;
          const updatedAccount = await adminService.updateAdminAccount(adminInfo);
          console.log(adminInfo);
          return res.status(201).send(true);
        }else{
          return res.send(false);
        }
      }


  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.findadminById = async (req, res) => {
  try{
    const adminID = req.params.adminID;
    const findByID = await adminService.findAdminById(adminID);
    return res.send(findByID);
  }catch(err){
    return res.status(500).send({
      error:  err.message
    });
  }
};

module.exports.Login = async (req, res) => {
  try{
    console.log(req.params);
    const admin = await adminService.chkUserCreds(req.params.username, req.params.password);
    
    if (admin == null) {
      return res.status(401).send(false);
    }else{

      
      return res.send(admin);
    }
  }catch(err){
    return res.status(500).send({
      error:  err.message
    });
  }
};

module.exports.forgetPassword = async (req, res) => {
  try{
    const admin = await adminService.getAdminByUsername(req.body.username);
    if (admin == null) {
      return res.status(401).send({
        error:
          'User not found'
      });
    }
    let isCorrectPassword = await bcrypt.compare(req.body.password, admin.password);
    if(isCorrectPassword){
      return res.status(200).send(false);
    }else{
      let hashedPassword = await bcrypt.hash(req.body.password, 12);
      admin.password = hashedPassword;
      const userUpdated = await adminService.updateAdminAccount(admin);
      return res.status(200).send(true);
    }

  }catch(err){
    return res.status(500).send({
      error:  err.message
    });
  }
};

