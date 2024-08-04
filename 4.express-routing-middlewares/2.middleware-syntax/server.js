//! SYNTAX


//? function middlewareName(req, res, next){
//    // logic here
//?    next(); // Proceed to next middleware or route handler
//? }


//* Global usage: app.use(middlewareName);

//* For Specific use
//* app.get('/users', middlewareName, routeHandler) 