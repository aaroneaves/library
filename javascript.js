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
    const card = document.createElement("div");
    card.classList.add('card');
    card.textContent = `Title: ${book.title}   Author: ${book.author}    Pages: ${book.pages}`;
    
    //read button
    const readButton = document.createElement("button");
    readButton.classList.add('read-button');
    if (book.read) {
        readButton.classList.add('read-book-true');
    } else {
        readButton.classList.add('read-book-false');
    };

    readButton.addEventListener('click', () => {
        readButton.classList.toggle('read-book-true');
        readButton.classList.toggle('read-book-false');
    });

    //remove button
    const removeButton = document.createElement("button");
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', () => {
        card.remove();
        myLibrary.splice(card, 1);
    });
    
    //add items to card, add card to DOM
    card.appendChild(readButton);
    card.appendChild(removeButton);
    bookContainer.appendChild(card);
};

//Popup form

const newBookButton = document.querySelector('#new-book');
newBookButton.addEventListener('click', () => {
    openTheForm();
});

const removeAll = document.querySelector('#remove-all');
removeAll.addEventListener('click', () => {
    while (bookContainer.firstChild) {
        bookContainer.removeChild(bookContainer.firstChild);
      }
      myLibrary = [];
});

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', (event) => {
    if (title.value && author.value && pages.value && (yes.checked || no.checked)) {
        addBookToLibrary();
    } else {
        alert('Please fill out entire form before pressing Submit');
    }  
    event.preventDefault();
}, true);                                         

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