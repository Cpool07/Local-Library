//------------accounts.js #1------------------------

function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}



//------------accounts.js #2------------------------

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => {
   // set the last names to lower case to be sorted alphabetically
    const nameA = a.name.last.toLowerCase();
    const nameB = b.name.last.toLowerCase();
    return nameA < nameB ? -1: 1
  });
}


//------------accounts.js #3------------------------
// I destructured the param "account" 
function getTotalNumberOfBorrows({id: userId}, books) {
// assign variable to store our counter
let totalBorrows = 0;
// loop through books, then loop through borrows to check where account id = borrower id. If ids match, increment counter +1
books.forEach(book=> book.borrows.forEach(borrower => userId === borrower.id ? totalBorrows++ : null));
//return the counter
return totalBorrows;
}


//------------accounts.js #4------------------------

//this function should return an array of all books that are currently in possesion of requested account
function getBooksPossessedByAccount(account, books, authors) {
  const bookObjs = books.filter(book => book.borrows[0].id === account.id && !book.borrows[0].returned)
  bookObjs.map(book => book["author"] = authors.find(author => author.id === book.authorId))
  return bookObjs;
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};


