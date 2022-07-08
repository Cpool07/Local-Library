//------------books.js #1--------------

function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}


//------------books.js #2--------------

function findBookById(books, id) {
  return books.find(book => book.id === id);
}


//------------books.js #3--------------

// go into books object, refer to "borrows".returned and check if false
// if false, add entire book object to first array
function partitionBooksByBorrowedStatus(books) {
  const array = [[],[]];
  books.forEach(book => book.borrows[0].returned ? array[1].push(book): array[0].push(book));
  return array;
}


//------------books.js #4--------------


function getBorrowersForBook(book, accounts) {
  return book.borrows.map(trans => {
    const account = accounts.find(account => account.id === trans.id);
    return {...trans, ...account};
  })
  .slice(0,10)
}




module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
