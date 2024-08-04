//! We can start this server with npm run start
const express = require('express');
const app = express();
const PORT = 8082;

//! Serve static files
// app.use(static())

//! Pass incomming data
app.use(express.json());
// app.use(express.urlencoded())


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