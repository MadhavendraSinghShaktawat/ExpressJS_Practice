const express = require("express");
const app = express();
const UserRouter = require('./routes/usersRoute')
const PORT = 8082;


//! GET User routes
//? Home route
app.use('/users', UserRouter);
app.get('/', (req, res)=>{
    res.json({
        message: "Welcome to home page"
    })
});

//? Starting server
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});