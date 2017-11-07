// exporting route config object

// method - the HTTP method used to access this endpoint
// path - the request url used to access this endpoint
// method & path are used in conjunction

// config - setting for how the request is handled after it's recieved.

// auth.mode - if set to optional, the route
// will be accessible without any authentication header

// handler - the function that will run when a request is recieved to the endpoint
// handler:  function(request, reply){}
// request - the request object containing all details including data, parameters, etc.
// reply - a function that allows us to send an HTTP response with
// data, or a message to the requester
module.exports = {
  method: "POST",
  path: "/api/users",
  config: {
    handler: function(request, reply) {
      // creating a new instance of a user from the User db model
      // will validate any data passed in by comparing to the modelSchema
      let user = new this.models.User(request.payload);

      user
        .save() // saves the new user record to the database
        .then(user => reply(user)) // sends the saved user record in the HTTP response
        .catch(err => reply(err)); // sends the error if one occurred in the HTTP response
    }
  }
};
