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

const modal = document.querySelector(".popup-form");
const close = document.querySelector(".close");

function showModal() {
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}

close.addEventListener("click", closeModal);

display();
