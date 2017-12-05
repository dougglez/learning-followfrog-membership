
const Application = function(args) {
  let app = {};

  app.email = args.email;
  app.password = args.password;
  app.confirm = args.confirm;
  app.status = args.status;
  app.message = null;

  app.isValid = function() {
    return app.status === "validated";
  };

  app.isInvalid = function() {
    return !isValid();
  };

  app.setInvalid = function(message) {
    app.status = 'invalid';
    app.message = message;
  };

  app.validate = function(message) {
    app.status = 'validated';
    app.message = message;
  };

  return app;

};

module.exports = Application;
