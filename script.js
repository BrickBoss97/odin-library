const dialog = document.querySelector("dialog");
const form = document.querySelector("#myForm")
const bookContainer = document.querySelector(".books")

function openForm() {
    dialog.showModal();
}
  
function closeForm() {
    dialog.close();
}

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const titleInput = document.querySelector(".titleInput").value;
    const authorInput = document.querySelector(".authorInput").value;
    const pagesInput = document.querySelector(".pagesInput").value;
    const readInput = document.querySelector(".readInput").value;

    myLibrary.push(new Book(titleInput, authorInput, pagesInput, readInput));
    
    form.reset();

    displayNewBook()
}

function displayNewBook() {
    let newBook = myLibrary.at(-1);

    const divBook = document.createElement("div");
    divBook.classList.add("book");
    bookContainer.append(divBook);

    const bookTitle = document.createElement("h2");
    bookTitle.classList.add("title");
    bookTitle.textContent = newBook.title;
    divBook.append(bookTitle);
    
    const bookAuthor = document.createElement("div");
    bookAuthor.classList.add("author");
    bookAuthor.textContent = newBook.author;
    divBook.append(bookAuthor);
    
    const bookPages = document.createElement("div");
    bookPages.classList.add("pages");
    bookPages.textContent = `Pages: ${newBook.pages}`;
    divBook.append(bookPages)
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
    dialog.close();
});