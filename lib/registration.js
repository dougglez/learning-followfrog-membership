const User = require('../models/user');
const Application = require('../models/application');

const RegResult = function () {

  let result = {
    success : false,
    message : null,
    user : null
  };

  return result;

};

const validateInputs = function(app) {
  if(!app.email || !app.password) {
    app.setInvalid("Email and password are required");
  } else if(app.password !== app.confirm) {
    app.setInvalid("Passwords don't match");
  } else {

  }
};

exports.applyForMembership = function(args) {
  const regResult = new RegResult();
  const app = new Application(args);

  //validate inputs
  validateInputs(app);
  // validate password and email
  //
  if (app.isValid()) {
    regResult.success = true;
    regResult.message = "Welcome!";

    regResult.user = new User(args);
  }


  return regResult;

};