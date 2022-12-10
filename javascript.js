let myLibrary = [];

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');

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
    title.value = null;
    author.value = null;
    pages.value = null;
    yes.checked = false;
    no.checked = false;
}

