class Book {
  constructor(title, author, isbn) {
    this.title   = title ;
    this.author  = author ;
    this.isbn    = isbn ;
  }
}

class UI {
  addBookToList(book) {
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

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove() ;
    }
  }

  showAlert(message, cssClass) {
    const div = document.createElement('div') ;
    div.classList.add(...['alert', cssClass]) ;
    div.textContent = message ;
  
    const container = document.querySelector('.container') ;
    const form      = document.querySelector('#book-form') ;
  
    container.insertBefore(div, form) ;
  
    setTimeout(() => {
      document.querySelector('.alert').remove() ;
    }, 3000);
  }

  clearFields() {
    document.getElementById('title').value  = '' ;
    document.getElementById('author').value = '' ;
    document.getElementById('isbn').value   = '' ;
  }
}

//-----------------------Event Handdlers--------------------------//
// Handle form submission.
document.getElementById('book-form').addEventListener('submit', function(e) {
  
  // Get form values.
  const title  = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn   = document.getElementById('isbn').value ;
  
  // Instantiate book object and initialise it.
  const book = new Book(title, author, isbn) ;

  // instantiate UI object.
  const ui = new UI() ;

  // Validate 
  if ( title === '' || author === '' || isbn === '' ) {
    ui.showAlert('Please, fill in all fields.', 'error') ;
  } else {
    ui.addBookToList(book) ;
    ui.clearFields() ;
    ui.showAlert('Book has been added!', 'success') ;
  }

  e.preventDefault() ;
}) ;

// Handle delete btn click.
document.getElementById('book-list').addEventListener('click', function(e) {
  const ui = new UI() ;

  ui.deleteBook(e.target) ;

  ui.showAlert('Book has been deleted', 'success') ;

  e.preventDefault() ;
}) ;