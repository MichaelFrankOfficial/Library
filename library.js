var addNovel = document.getElementById("book-type-novel"),
    addHistory = document.getElementById("book-type-history"),
    addComic = document.getElementById("book-type-comic"),
    addCartoon = document.getElementById("book-type-cartoon"),
    textBox = document.getElementById("title-text"),
    printArea = document.getElementById("print-area");
    
var Book = function Book(bookTitle, bookType){
    this.bookTitle = bookTitle;
    this.bookType = bookType;
}

var books = [];

    addNovel = addNovel.addEventListener("click", function(){
        books.push(new Book(textBox.value, "Novel"));
        renderBooks();
    });
    addHistory = addHistory.addEventListener("click", function(){
        books.push(new Book(textBox.value, "History"));
        renderBooks();
    });
    addComic = addComic.addEventListener("click", function(){
        books.push(new Book(textBox.value, "Comic"));
        renderBooks();
    });
    addCartoon = addCartoon.addEventListener("click", function(){
        books.push(new Book(textBox.value, "Cartoon"));
        renderBooks();
    })

var renderBooks = function renderBooks(){
    printArea.innerText = "";
    for(var i = 0; i < books.length; i++){
        var curBook = books[i];
    printArea.innerText += i + " : " + curBook.bookTitle + " is a " + curBook.bookType + "\n";
    }
}