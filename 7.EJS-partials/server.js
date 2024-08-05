const express = require('express');
const ejsLayouts = require('express-ejs-layouts')
const app = express();
const path = require('path')
const PORT = 8082;

//* Serve the static file/folder
app.use(express.static(path.join(__dirname, 'public')));

//* Setting EJS sigine
app.set("view engine", "ejs");

//* Plugin the ejs as middleware
app.use(ejsLayouts);



//? Render Home page/route
app.get('/', (req, res)=>{
    res.render('home');
});

//? Render About page/route
app.get('/about', (req, res)=>{
    res.render('about');
});

//? Render Gallery page/route
app.get('/gallery', (req, res)=>{
    res.render('gallery');
});

//? Render Contact page/route
app.get('/contact', (req, res)=>{
    res.render('contact');
});


app.listen(PORT, () => console.log(`Server is working on http://localhost:${PORT}`))