const dialog = document.querySelector("dialog");

function openForm() {
    dialog.showModal();
}
  
function closeForm() {
    dialog.close();
}

const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = 'not read yet';
}

function addBookToLibrary() {
  // do stuff here
}