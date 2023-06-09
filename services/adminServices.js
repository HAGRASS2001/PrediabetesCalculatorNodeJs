const { ObjectId } = require('mongoose').Types;
const bcrypt = require('bcrypt');
const AdminModel = require('../models/Admin');

module.exports.FindAllAdmins = async () => {
    try{
        const admin = await AdminModel.find();
        return admin;
    }catch (err){
        throw new Error('can not font any Admin');
    }
};

module.exports.addNewAdmin = async(adminInfo) => {
    try{
      let hashedPassword = await bcrypt.hash(adminInfo.password, 12);
        const admin = new AdminModel({
            username: adminInfo.username,
            password: hashedPassword,
            name: adminInfo.name,
            age: adminInfo.age,
            gender: adminInfo.gender,
            email: adminInfo.email,
            phoneNumber: adminInfo.phoneNumber,
            address: adminInfo.address,
            role: adminInfo.role
        });
        const createdAdmin = await admin.save();
        return createdAdmin;
    }catch(err){
        throw new Error('Cold not create admin.');
    }  
};

module.exports.updateAdminAccount = async (admin) => {
    try {
      const status = await AdminModel.findByIdAndUpdate(admin._id, admin);
      return status;
    } catch (err) {
      throw new Error('Could not update user.');
    }
};

module.exports.deleteAccount = async (admin) => {
    try {
      const status = await AdminModel.findByIdAndDelete(admin._id, admin);
      return status;
    } catch (err) {
      throw new Error('Could not update user.');
    }
};

module.exports.findAdminById = async (adminID) => {
    try {
      const user = await AdminModel.findById(adminID);
      return user;
    } catch (err) {
      throw new Error('Could not find admin.');
    }
  };

module.exports.chkUserCreds = async(username, password) => {
    try{
        // find user that has the same username
        const admin = await AdminModel.findOne({
            username: username
        });
        // compare the plaintext password with the user's hashed password in the db.
        if(admin != null){
          let isCorrectPassword = await bcrypt.compare(password, admin.password);
          if (isCorrectPassword) {
              return admin;
          } else {
              return null;
          }
        }else{
          return null;
        }
  
    }catch(error){
        throw new Error('Error logging in, please try again later.');
    }
};

module.exports.getAdminByUsername = async(Username) => {
  try{
      // find user that has the same username and id
      const admin = await AdminModel.findOne({
          username: Username
      });
        return admin;
  }catch(error){
      throw new Error('Error logging in, please try again later.');
  }
};