let myLibrary = ["Harry Potter", "The Hobbit", "The Lord of the Rings"];
const books = document.querySelector(".books");

function Book() {}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function display() {
  for (book of myLibrary) {
    const tempBook = document.createElement("div");
    tempBook.classList.add("book");
    tempBook.textContent = book;
    books.appendChild(tempBook);
  }
}

display();
