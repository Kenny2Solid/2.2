

let book = {
    title: "diary of a wimpy kid",
    author: "Jeff Kinney",
    year: "2007",
};


book.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}.`;
};


book.genre = "Fiction";


delete book.year;


console.log(book);
console.log(book.getSummary());


