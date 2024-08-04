//! We can start this server with npm run start
const express = require('express');
const app = express();
const PORT = 8082;


//?------Built-in Middlewares-----
//! Serve static files
// app.use(static())

//! Pass incomming data
app.use(express.json());
// app.use(express.urlencoded())




//?------App-level Middlewares-----
//* Login request of every middleware

const logRequest = (req, res, next)=>{
    console.log("I'm trying to hang the server...");
    next();
}
app.use(logRequest);   //? Global middleware



//? Home route
app.get('/', (req, res)=>{
    console.log(req.body);
    res.json({
        message: "Welcome to home route"
    });
});
//? Create a book
app.post('/books', (req, res)=>{
    console.log(req.body);
    res.json({
        message: "Built-in Middleware demo"
    });
});

//* Starting the server
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});