const express = require('express');

//! Instance of express
const app = express();

// console.log(app);

//* Creating the port
const PORT = 8082;

//* Define the router handler
app.get('/', (req, res)=>{
    res.send('Hello World');
});

//* Starting the server
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`); 
});