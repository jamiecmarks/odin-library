let myLibrary = [];

const books = document.querySelector(".books");
let bookCount = 0;

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
  ++bookCount;
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
    let removeBook = document.createElement("span");

    removeBook.classList.add("material-symbols-outlined");
    removeBook.classList.add("close");
    removeBook.textContent = "close";
    tempBook.appendChild(removeBook);

    title.textContent = book.title;
    tempBook.appendChild(title);

    author.textContent = book.author;
    tempBook.appendChild(author);

    pages.textContent = book.pages;
    tempBook.appendChild(pages);

    read.type = "checkbox";
    read.checked = book.read;
    tempBook.appendChild(read);

    tempBook.classList.add("book");
    tempBook.setAttribute("data-value", bookCount);

    books.appendChild(tempBook);
  }
}

function remove_book(book) {
  let allBooks = document.querySelectorAll(".book");
  for (item of allBooks) {
    if (item.getAttribute("data-value") == book.getAttribute("data-value")) {
      item.parentNode.removeChild(item);
    }
  }
  myLibrary.splice(book.getAttribute("data-value"), 1);

  display();
}

const modal = document.querySelector(".popup-form");
const close = document.querySelector("form > .close");

function showModal() {
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}

close.addEventListener("click", closeModal);

display();
