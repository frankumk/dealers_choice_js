const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const static = require('static');
const data = require('./data')

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname,'./assets')));

const header = ()=>{
    return `
    <head>
        <link rel="stylesheet" href="/style.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap" rel="stylesheet">
        <title>Sci-Fi Book Recs</title>
    </head>
`
}
const books = data.list();

app.get('/',(req,res,next)=>{

    const html = `
        <!DOCTYPE html>
        <html>
            ${header()}
            <body>
                <div class = "header">
                    <h1>Sci-Fi Standbys</h1>
                    <p>Here are a few sci-fi favorites to get you through a pandemic</p>
                </div>
                <div class = "booklist">
                ${books.map(book =>{return `
                    <div class="book">
                        <a href = "/books/${book.id}" class = "booklink">
                            <h4 class = "booktitle">${book.title}</h4>
                            <img src = "${book.img}" alt = "${book.title}/>
                        </a>
                    </div>
                
                `
                }).join('')}

            </div>
            <script>
                console.log(books);
            </script>
        </body>
    </html>
    `;
    res.send(html);
});

app.get('/books/:id',(req,res,next)=>{
    const book = data.findBook(Number(req.params.id));
    
    res.send(`
        <!DOCTYPE html>
        <html>
            ${header()}
            <body>
                <nav>
                    <a href='/'>Home</a>
                    // <a href='/book'>Next</a>
                </nav>
                <h1>${book.title}</h1>
                <h2>${book.author}</h2>
                <p class='reviews'>Review: ${book.review}</p>
                <p class='summary'>${book.summary}</p>
            </body>
        </html>
    `);
});



const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`listening to port: ${PORT}`);
})