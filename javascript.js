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
    div = document.createElement("div");
    div.classList.add('box');
    div.setAttribute('data-index', (myLibrary.length - 1));
    div.textContent = `Title: ${book.title}   Author: ${book.author}    Pages: ${book.pages}   Read: ${book.yes}`;
    removeButton = document.createElement("button");
    removeButton.classList.add('remove-button');
    removeButton.setAttribute('data-index', (myLibrary.length - 1));
    removeButton.addEventListener('click', () => {
        // removeBook(div.dataset.index);
        div.remove();
        //need to also delete that book from the array
        myLibrary.splice(div.dataset.index, 1);
    });
    div.appendChild(removeButton);
    bookContainer.appendChild(div);
}

//remove book

// function removeBook (index) {
//     bookContainer.removeChild(index)
// }

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


// window.onclick = function (event) {
//     let modal = document.getElementById('form-wrapper');
//     if (event.target == modal) {
//       closeForm();
//       alert('its working');
//     }
// }