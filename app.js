// Book constructor.
function Book(title, author, isbn) {
  this.title  = title ;
  this.author = author ;
  this.isbn   = isbn ;
} 

// UI consturctor
function UI() {}

UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list') ;

  // Create tr element.
  const row = document.createElement('tr') ;

  // Insert columns.
  row.innerHTML =
  `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  ` ;

  list.appendChild(row) ;
}

UI.prototype.clearFormFields = function() {
  document.getElementById('title').value  = '' ;
  document.getElementById('author').value = '' ;
  document.getElementById('isbn').value   = '' ;
}

document.getElementById('book-form').addEventListener('submit', function(e) {
  
  // Get form values.
  const title  = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn   = document.getElementById('isbn').value ;
  
  // Instantiate book object and initialise it.
  const book = new Book(title, author, isbn) ;

  // instantiate UI object.
  const ui = new UI() ;

  ui.addBookToList(book) ;

  ui.clearFormFields() ;

  e.preventDefault() ;
}) ;