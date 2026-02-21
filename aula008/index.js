//opp Programação orientada a objetos, coloca infromações que se relacionam em um objeto

let bookTitle = "Atomic Habits";
let bookAuthor = "James CLear";
let bookPages = 306;

const book = {
  bookTitle: "Atomic Habits",
  bookAuthor: "James CLear",
  bookPages: 306,
  bookChapters: {
    chap1: "Fudamentals",
    chap2: "1st law",
  },
  printBook: function() {
    console.log('Printing')
  }
};

book.printBook()

console.log(book);

function printBook() {
  console.log("printing...");
}
