let myLibrary = [];

const body = document.querySelector('body');
const form = document.querySelector('.book-form');
const library = document.querySelector('.library');

function Book(title, author, pages, read){
  this.title  = title;
  this.author = author;
  this.pages  = pages;
  this.read   = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title,author,pages, read)
  myLibrary.push(book);
}

function addText(node,book){     
  for(const cur in book){

    let title = cur.charAt(0).toUpperCase() + cur.slice(1);
    node.appendChild(document.createTextNode(`${title}: ${book[cur]}`));
    node.appendChild(document.createElement('BR'));
  }
} 

function addBookCard(book){
  const card    = document.createElement('div');
  card.classList.add('book-card');
  addText(card, book);

  const shelf = document.getElementById('shelf');
  shelf.appendChild(card);
}

function displayLibrary(library){
  library.forEach(book => {
    addBookCard(book);
  });
}

function removeForm(){
  form.remove();
}

function addListenHelper(){
  body.insertBefore(form, library);
  library.classList.add('opaque');
}

function addListen(){
  const btn = document.querySelector('.add-button');
  btn.addEventListener('click', () => {
    addListenHelper()
  });
}

function sumbitListenHelper(){
  console.log(form.get('title'));
}

function submitListen(){
  const btn = document.querySelector('.submit-button');
  btn.addEventListener('click', () => {
    sumbitListenHelper();
  });
}

function driver(){
  removeForm();
  addListen();
  submitListen();
}

driver();