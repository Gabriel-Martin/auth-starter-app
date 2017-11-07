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
  path: "/api/users/login",
  config: {
    // auth: {
    //   mode: "optional"
    // },
    handler: function(request, reply) {
      reply("not implemented");
    }
  }
};
