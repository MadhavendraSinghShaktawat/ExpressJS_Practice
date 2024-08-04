const express = require('express');


//* Create instance of express router
const UserRouter = express.Router();

//? Using Route()
UserRouter
    .route("/:id")
    .get((req, res)=>{
        res.json({
            message: "User fetched"
        })
    }).put((req, res)=>{
        res.json({
            message: "User Updated"
        })
    }).delete((req, res)=>{
        res.json({
            message: "Users deleted"
        })
    });

UserRouter.get('/', (req, res)=>{
    res.json({
        message: "Youhuuu all users fetched."
    })
});





//* Exporting router
module.exports = UserRouter;