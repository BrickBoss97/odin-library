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

    //Construct New Book DOM Element
    const divBook = document.createElement("div");
    divBook.setAttribute("data-number", String(myLibrary.length - 1));
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

    const bookButtons = document.createElement("div");
    bookButtons.classList.add("book-buttons");
    divBook.append(bookButtons);

    const readButton = document.createElement("button");
    readButton.classList.add("btn", "read-status");
    if (newBook.read == "true") {
        readButton.classList.add("read");
        readButton.textContent = "Read";
    }
    else {
        readButton.classList.add("unread");
        readButton.textContent = "Unread";
    }

    const removeButton = document.createElement("button");
    removeButton.classList.add("btn", "remove");
    removeButton.textContent = "X";
    bookButtons.append(readButton, removeButton);

    //Change read status
    readButton.addEventListener("click", () => {
        if (readButton.classList.contains("read")) {
            readButton.classList.replace("read", "unread");
            readButton.textContent = "Unread";
        }
        else {
            readButton.classList.replace("unread", "read");
            readButton.textContent = "Read";
        }
    });

    //Remove book button function
    removeButton.addEventListener("click", () => {
        const bookId = divBook.getAttribute("data-number");
        const allBooks = document.querySelectorAll(".book");

        //Reduce remaining Book Id's
        allBooks.forEach((book) => {
            if (bookId < book.dataset.number) {
                book.dataset.number = book.dataset.number - 1;
            }
        });

        //Remove book from array and display
        myLibrary.splice(bookId, 1)
        divBook.remove();
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
    dialog.close();
});

function templateBooks() {
    myLibrary.push(new Book("Moby Dick", "Herman Mellvile", "635", "true"));
    displayNewBook()

    myLibrary.push(new Book("Dune", "Frank Herbert", "896", "false"))
    displayNewBook()
}

templateBooks()