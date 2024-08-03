const express = require('express');
const app = express();
const PORT = 8082;


//* Dummy data
const books = [
    {id: "1", title: 'The Great Gatsby', author: 'F.Scott'},
    {id: "2", title: 'The Moby Dic', author: 'Herman'},
    {id: "3", title: 'The MERN Stack', author: 'Madhavendra'},
];

//* Receiving incoming from the client configuration
app.use(express.json());


//! Fetching data
//? Home Route
app.get('/', (req, res)=>{
    res.json({
        status: "Success",
        message: "Welcome to my first book api using express.",
    });
});

//? Fetching all books
app.get('/books', (req, res)=>{
    res.json({
        status: "Success",
        messgae: "Books Fetched successfully",
        data: books
    })
});

//? Fetching a single book
app.get('/books/:id', (req, res)=>{
    const id = req.params.id;
    const bookFound = books.find((book) => book.id === id);
    if (!bookFound) {
        return res.json({
            status: 'Failed',
            message: `Your book with id: ${id}, not found.`
        });
    }
    else{
        res.json({
        status: "Success",
        messgae: "Books Fetched successfully",
        data: bookFound
    })}
});



//! Posting data

//? Create a book
app.post('/books', (req, res)=>{
    const newPost = req.body;
    books.push(newPost);
    res.json({
        status: "Success",
        messgae: "Books Created successfully",
        data: books
    });
});




//* Starting the server
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});