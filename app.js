myLibrary = [];
let bookshelf = document.querySelector("#bookshelf");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let read = document.querySelector("#read");
let submit = document.querySelector("#submit");
let addButton = document.querySelector("#add");
let form = document.querySelector("#addBook");

addButton.addEventListener("click", () => {
  showForm();
});

submit.addEventListener("click", () => {
  checkValidation(title, author, pages, read);
});

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBook(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  cleanup();
  showBooks(myLibrary);
  form.style.visibility = "hidden";
}

function showBooks(library) {
  bookshelf.innerHTML = "";
  for (i = 0; i < library.length; i++) {
    bookshelf.innerHTML += `<div class="book">
    <h3>${library[i].title}</h3>
    <h4>${library[i].author}</h4>
    <p>${library[i].pages} pages</p>
    <p>Read?</p>
    <input type="checkbox" name="isread" id="isRead" ${
      library[i].isRead ? "checked" : ""
    }/>
    </div>`;
  }
}

function cleanup() {
  title.value = "";
  author.value = "";
  pages.value = 0;
  read.checked = false;
}

function badData() {
  alert("Please fix the inputs");
}

function checkValidation(title, author, pages, read) {
  if (title.value === "") {
    badData();
    return;
  } else if (author.value === "") {
    badData();
    return;
  } else if (pages.value === "") {
    badData();
    return;
  }
  addBook(title.value, author.value, pages.value, read.checked);
}

function showForm() {
  form.style.visibility = "visible";
}
