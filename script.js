let myLibrary = ["Harry Potter", "The Hobbit", "The Lord of the Rings"];

function Book() {}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function display() {
  for (book of myLibrary) {
  }
}

display();
