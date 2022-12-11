let myLibrary = [];

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const bookContainer = document.querySelector('.book-container');

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', () => {
    addBookToLibrary();
});

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
}

function createCard () {
    div = document.createElement("div");
    div.classList.add('box');
    div.style.height = "100px";
    div.style.width = "800px";
    div.style.backgroundColor = '#c0c0c0';
    div.style.border = "solid 1px #000000";
    div.textContent = `Title: ${book.title}   Author: ${book.author}    Pages: ${book.pages}   Read: ${book.yes}`;
    bookContainer.appendChild(div);
}

