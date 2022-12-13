//Library, Book, and books

let myLibrary = [];

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const bookContainer = document.querySelector('.book-container');

function Book(title, author, pages, read ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    window.book = new Book(title.value, author.value, pages.value, yes.checked);
    myLibrary.push(book);
    createCard();
    title.value = null;
    author.value = null;
    pages.value = null;
    yes.checked = false;
    no.checked = false;
    closeTheForm();
}

function createCard () {
    //card
    const div = document.createElement("div");
    div.classList.add('box');
    div.textContent = `Title: ${book.title}   Author: ${book.author}    Pages: ${book.pages}`;      //Read: ${book.yes}

    //read status
    const readStatus = document.createElement("div");
    if (book.read) {
        readStatus.classList.add('read-book-true');
    } else {
        readStatus.classList.add('read-book-false');
    };
    
    //remove button
    const removeButton = document.createElement("button");
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', () => {
        div.remove();
        myLibrary.splice(div, 1);
    });
    
    //read button
    const readButton = document.createElement("button");
    readButton.classList.add('read-button');
    readButton.addEventListener('click', () => {
        readStatus.classList.toggle('read-book-true');
        readStatus.classList.toggle('read-book-false');
    });
    
    //add all of above to DOM
    div.appendChild(readStatus);
    div.appendChild(removeButton);
    div.appendChild(readButton);
    bookContainer.appendChild(div);
};

//Popup form

const newBookButton = document.querySelector('#new-book');
newBookButton.addEventListener('click', () => {
    openTheForm();
});

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', () => {
    addBookToLibrary();
});

const cancelButton = document.querySelector('#cancel-button');
cancelButton.addEventListener('click', () => {
    closeTheForm();
});

function openTheForm() {
    document.getElementById("pop-up-form").style.display = "grid";
}
  
function closeTheForm() {
    document.getElementById("pop-up-form").style.display = "none";
}