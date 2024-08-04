const express = require('express');
const app = express();
const path = require('path')
const PORT = 8082;

//* Serve the static file/folder
app.use(express.static(path.join(__dirname, 'public')));

//* Setting EJS sigine
app.set("view engine", "ejs");



//? Render Home page/route
app.get('/', (req, res)=>{
    res.render('home.ejs');
});

//? Render About page/route
app.get('/about', (req, res)=>{
    res.render('about.ejs');
});

//? Render Gallery page/route
app.get('/gallery', (req, res)=>{
    res.render('gallery.ejs');
});

//? Render Contact page/route
app.get('/contact', (req, res)=>{
    res.render('contact.ejs');
});
//? Render Contact page/route
app.get('/users', (req, res)=>{
    //*Summy users data
    const userData = {name: "Alice", age: 18, isPremiumUser: false, email: "alice@gmail.com", isLogin: false};
    res.render('userData.ejs', userData);
});

app.listen(PORT, () => console.log(`Server is working on http://localhost:${PORT}`))