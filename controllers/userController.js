const userService = require('../services/userServices');
const bcrypt = require('bcrypt');

module.exports.userRegistration = async (req, res) => {
  try {
    const userInfo = {
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
      };
    const createdUser = await userService.addNewUser(userInfo);
    return res.status(201).send({
      msg: 'User created successfully.',
      UserID: createdUser._id
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.FindAllUsers();
    return res.send(users);
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.getuserByID = async (req, res) => {
  try {
    const userID = req.params.userID;
    const user = await userService.findUserById(userID);
    return res.send(user);
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.Login = async (req, res) => {
  try{
    const user = await userService.chkUserCreds(req.params.username, req.params.password);
    
    if (user == null) {
      return res.status(401).send(false);
    }else{

      
      return res.send({
        user: user
      });
    }
  }catch(err){
    return res.status(500).send({
      error:  err.message
    });
  }
};

module.exports.UpdateUserAccount = async (req, res) => {
  try{
    const user = await userService.getUserInfo(req.body._id);
    
    if (user == null) {
      return res.status(401).send({
        error:
          'User not found'
      });
    }else{
      if(req.body.oldPassword != null && req.body.newPassword != null){
        let isCorrectPassword = await bcrypt.compare(req.body.oldPassword, user.password);
        if(isCorrectPassword){
          let hashedPassword = await bcrypt.hash(req.body.newPassword, 12);
          const userInfo = {
            _id: req.body._id,
            username: req.body.username,
            password: hashedPassword,
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber
          };
          const userUpdated = await userService.updateUserAccount(userInfo);
          return res.send({
            pass: req.body.oldPassword,
            pass2: user.password,
            user: user,
            message: "updated"
          });
        }else{
          return res.send({
            pass: req.body.oldPassword,
            pass2: user.password,
            user: user,
            message: "you enter wrong password"
          });
        }
      }else{
        const userInfo = {
          _id: req.body._id,
          username: req.body.username,
          password: user.password,
          name: req.body.name,
          age: req.body.age,
          gender: req.body.gender,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber
        };
        const userUpdated = await userService.updateUserAccount(userInfo);
        return res.send({userUpdated});
      }
    }
  }catch(err){
    return res.status(500).send({
      error:  err.message
    });
  }
};


module.exports.forgetPassword = async (req, res) => {
  try{
    const user = await userService.getUserByUsername(req.body.usernameForget);
    if (user == null) {
      return res.status(401).send({
        error:
          'User not found'
      });
    }
    let isCorrectPassword = await bcrypt.compare(req.body.passwordForget, user.password);
    if(isCorrectPassword){
      return res.status(200).send(false);
    }else{
      user.password = await bcrypt.hash(req.body.passwordForget, 12);
      const userUpdated = await userService.updateUserAccount(user);
      return res.status(200).send(true);
    }

  }catch(err){
    return res.status(500).send({
      error:  err.message
    });
  }
};