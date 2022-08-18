let myLibrary = [];

function Book(title, author, pages, read){
  this.title  = title;
  this.author = author;
  this.pages  = pages;
  this.read   = read;
}

function addBookToLibrary(book) {
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

const potter = new Book('potter', 'jk bowling', 1000, true);
const potter2 = new Book('potter', 'jk bowling', 1000, true);
addBookToLibrary(potter);
addBookToLibrary(potter2);

function displayLibrary(library){
  library.forEach(book => {
    addBookCard(book);
  });
}

displayLibrary(myLibrary);