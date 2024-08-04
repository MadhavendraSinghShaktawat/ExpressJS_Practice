const express = require('express');
const app = express();
const path = require('path')
const PORT = 8082;

//* Serve the static file/folder
app.use(express.static(path.join(__dirname, 'public')));

//? Render Home page/route
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/views', 'home.html'));
});

//? Render About page/route
app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/views', 'about.html'));
});

//? Render Gallery page/route
app.get('/gallery', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/views', 'gallery.html'));
});

//? Render Contact page/route
app.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/views', 'contact.html'));
});

app.listen(PORT, () => console.log(`Server is working on http://localhost:${PORT}`))