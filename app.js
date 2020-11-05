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
const books = data.data;

const nextBookID = (ID)=> {
    if(ID===6){
        return 1;
    }else{
        return ID++;
    }
}

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
                ${books.map(book =>{
                    return `
                    <div class="book">
                        <a href = "/books/${book.id}" class = "booklink">
                            <h4 class = "booktitle">${book.title}</h4>
                            <img src = "${book.img}" alt = "${book.title}"/>
                        </a>
                    </div>
                `
                }).join('')}

            </div>
        </body>
    </html>
    `;
    res.send(html);
});

app.get('/books/:id',(req,res,next)=>{
    const book = data.findBook(Number(req.params.id));
    let nextBookId=0;
    //only 6 books, starts over at 1
    if(book.id===6){
        nextBookId = 1;
    }else{
        nextBookId = (book.id) +1;
    }
    console.log(nextBookId);
    if(book){
        res.send(`
            <!DOCTYPE html>
            <html>
                ${header()}
                <body>
                    <nav>
                        <a href='/'>Home</a>
                    //   <a href="/books/${nextBookId}">Next</a>
                    </nav>
                    <h1>${book.title}</h1>
                    <h2>${book.author}</h2>
                    <p class='reviews'>Review: ${book.review}</p>
                    <p class='summary'>${book.summary}</p>
                </body>
            </html>
        `);
    }else{
        res.statusCode = 404;
        res.write('<h1>Page Not Found<a href="\">Try Again</a></h1>');
        res.end();
    }
});



let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);