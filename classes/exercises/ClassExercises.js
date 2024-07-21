// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numPages, numCheckOut, discarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numPages = numPages;
        this.numCheckOut = numCheckOut;
        this.discarded = discarded;
    }
    checkout(){
        this.numCheckOut += 1;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(){
        super();
    }
    discard(){
        if (new Date().getFullYear() - this.copyrightDate){
            this.discarded = true;
        }
    }
}


class Novel extends Book {
    constructor(){
        super();
    }
    discard(){
        if (this.numCheckOut > 100){
            this.discarded = true;
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
prideAndPrejudice = new Novel(
    title = 'Pride and Prejudice', 
    author = 'Jane Austen',
    copyrightDate = 1813,
    isbn = '1111111111111',
    numPages = 432,
    numCheckOut = 32,
    discard = false  
);

shuttleBuildingManual = new Manual(
    title = 'Top Secret Shuttle Building Manual',
    author = 'Redacted',
    copyrightDate = 2013,
    isbn = '0000000000000',
    numPages = 1147,
    numCheckOut = 1,
    discard = false
);

// Code exercises 4 & 5 here:

shuttleBuildingManual.discard();
prideAndPrejudice.checkout(5);
