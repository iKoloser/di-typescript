class Book{
    title:string;
    constructor(title:string){
        this.title = title;
    }
    read(){
        
    }
}

class PaperBook extends Book{
    pages:number;
    constructor(title:string, pages:number){
        super(title);
        this.pages = pages;
    }

    read() {
        return "Book in papel"
    }
}

class ElectronicBook extends Book{
    size:number;
    constructor(title:string, size:number){
        super(title);
        this.size = size;
    }
    read() {
        return "Book in digital"
    }
}

class ParchmentBook extends Book{
    constructor(title:string){
        super(title);
    }
    read() {
        return "Book in Parchment"
    }
}

class ReadBook{


    books: Book;
    constructor(books:Book){
        this.books = books;
    }

    read() {
        return this.books.read();
    } 
}


const phisicalBook = new PaperBook("Dragones de papel",350);
const digitalBook = new ElectronicBook("One piece",150);
const parchmenttBook = new ParchmentBook("Soy Leyenda");

const readerPaper = new ReadBook(phisicalBook);
const readerDigital= new ReadBook(digitalBook);
const readerParchment= new ReadBook(parchmenttBook);

console.log (readerDigital.read());
console.log(readerPaper.read());
console.log(readerParchment.read())