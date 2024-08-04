const express = require('express');


//* Create instance of express router
const UserRouter = express.Router();

//? Getting all users
UserRouter.get('/', (req, res)=>{
    res.json({
        message: "Welcome to home route"
    });
});

//? Getting all user
UserRouter.get('/users', (req, res)=>{
    res.json({
        message: "Users fetched"
    })
});

//? Getting a user
UserRouter.get('/users/:id', (req, res)=>{
    res.json({
        message: "User fetched"
    })
});

//? Updating a user
UserRouter.put('/users/:id', (req, res)=>{
    res.json({
        message: "User Updated"
    })
});

//? Deleting a user
UserRouter.delete('/users/:id', (req, res)=>{
    res.json({
        message: "Users deleted"
    })
});




//* Exporting router
module.exports = UserRouter;