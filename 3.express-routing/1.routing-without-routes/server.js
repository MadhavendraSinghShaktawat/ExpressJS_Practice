const express = require("express");
const app = express();
const PORT = 8082;

//* Home Route
app.get('/', (req, res)=>{
    res.json({
        message: "Welcome to home route"
    });
});

//! GET User routes

//* Getting all user
app.get('/users', (req, res)=>{
    res.json({
        message: "Users fetched"
    })
});

//* Getting a user
app.get('/users/:id', (req, res)=>{
    res.json({
        message: "User fetched"
    })
});

//* Updating a user
app.put('/users/:id', (req, res)=>{
    res.json({
        message: "User Updated"
    })
});

//* Deleting a user
app.delete('/users/:id', (req, res)=>{
    res.json({
        message: "Users deleted"
    })
});


//! POST User routes
//* Getting all user
//* Getting a user
//* Updating a user
//* Deleting a user


//? Starting server
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});