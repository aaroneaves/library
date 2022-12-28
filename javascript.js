//Constructor, books, library, and meta-data

let myLibrary = [];

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const bookContainer = document.querySelector('.book-container');

class Book {
    constructor(title, author, pages, read ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary() {
    window.book = new Book(title.value, author.value, ~~pages.value, yes.checked);
    myLibrary.push(book);
    createCard();
    closeTheForm();
}

function createCard () {
    //card
    const card = document.createElement("div");
    card.classList.add('card');

    //title, author, and pages
    const title = document.createElement('div');
    title.classList.add('card-item');
    title.textContent = `"${book.title}"`;
    const author = document.createElement('div');
    author.classList.add('card-item');
    author.textContent = book.author;
    const pages = document.createElement('div');
    pages.classList.add('card-item');
    pages.textContent = `${book.pages} pages`;

    //button holder
    const buttonHolder = document.createElement('div');
    buttonHolder.classList.add('card-item');
    
    //read button
    const readButton = document.createElement("button");
    readButton.classList.add('read-button');
    if (book.read) {
        readButton.classList.add('read-book-true');
    } else {
        readButton.classList.add('read-book-false');
    };
    readButton.addEventListener('click', () => {
        if (popUpForm.style.display == "grid") {
            return
        } else {
            readButton.classList.toggle('read-book-true');
            readButton.classList.toggle('read-book-false');
            const index = Array.prototype.indexOf.call(bookContainer.children, card);
            if (myLibrary[index].read) {
                myLibrary[index].read = false;
            } else {
                myLibrary[index].read = true;
            }     
            updateMetaData();
        }
    });

    //remove button
    const removeButton = document.createElement("button");
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', () => {
        if (popUpForm.style.display == "grid") {
            return
        } else {
            card.remove();
            myLibrary.splice(card, 1);
            updateMetaData();
        }
    });
    
    //add items to card, add card to DOM
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    buttonHolder.appendChild(readButton);
    buttonHolder.appendChild(removeButton);
    card.appendChild(buttonHolder);
    bookContainer.appendChild(card);
};

let readBook;

const total = document.querySelector('.meta-total');
const read = document.querySelector('.meta-read');
const notRead = document.querySelector('.meta-not-read');

function updateMetaData() {
    total.textContent = myLibrary.length;
    readBook = 0;
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].read) {
            readBook += 1;
        }
    }
    read.textContent = readBook;
    notRead.textContent = myLibrary.length - readBook;
}

updateMetaData();

//Form

const newBookButton = document.querySelector('#new-book');
const popUpForm = document.querySelector('#pop-up-form');
newBookButton.addEventListener('click', () => {
    if (popUpForm.style.display = "grid") {
        return
    } else {
        popUpForm.style.display = "grid";
        title.focus();
    }
});

function closeTheForm() {
    document.getElementById("pop-up-form").style.display = "none";
    title.value = null;
    author.value = null;
    pages.value = null;
    yes.checked = false;
    no.checked = false;
}

const removeAll = document.querySelector('#remove-all');
removeAll.addEventListener('click', () => {
    if (popUpForm.style.display == "grid") {
        return
    } else {
        while (bookContainer.firstChild) {
            bookContainer.removeChild(bookContainer.firstChild);
        }
        myLibrary = [];   
        updateMetaData();
    }
});

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', (event) => {  
    if (title.value && author.value && pages.value && (yes.checked || no.checked)) {
        if (pages.value > 0 && pages.value < 10000 && (pages.value % 1 == 0 )) {
            addBookToLibrary();
            updateMetaData();
        } else {
            alert('Pages must be a whole number between 1 - 9,999');
        }
    } else {
        alert('Please fill out entire form before pressing Submit');
    }  
    event.preventDefault();
}, true);                                         

const cancelButton = document.querySelector('#cancel-button');
cancelButton.addEventListener('click', () => {
    closeTheForm();
});