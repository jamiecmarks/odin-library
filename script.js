let myLibrary = [];
const books = document.querySelector(".books");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = () => {
    if (read) {
      return `${title}, ${pages} pages, read`;
    }
    return `${title}, ${pages} pages, not yet read`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function toggleRead(temporaryBook) {
  temporaryBook.read = !temporaryBook.read;
}

//////////////////////////////////////////// Test book
const theHobbit = new Book("The Hobbit", "J.R Tolken", 233, true);
addBookToLibrary(theHobbit);
//////////////////////////////////////////

function display() {
  for (book of myLibrary) {
    let tempBook = document.createElement("div");
    let title = document.createElement("p");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let read = document.createElement("input");
    let checkLabel = document.createElement("label");

    read.type = "checkbox";
    read.checked = true;
    read.textContent = book.title;
    tempBook.appendChild(read);

    tempBook.classList.add("book");
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
