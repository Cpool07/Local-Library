
//------------home.js #1--------------
//Return a number that describes the number of books in the array.
function getTotalBooksCount(books) {
  return books.length;
}

//------------home.js #2--------------
//Return a number that describes the number of accounts in the array.
function getTotalAccountsCount(accounts) {
  return accounts.length;
}


//------------home.js #3--------------
//Return a number that represents the total books being borrowed
function getBooksBorrowedCount(books) {
// create a variable to reference the total borrowed number of books
  let borrowedCount = 0;
  books.forEach(book => book.borrows[0].returned ? borrowedCount + 0: borrowedCount ++)
  return borrowedCount;
}


//------------home.js #4--------------

function getMostCommonGenres(books) {
  return books.reduce((acc, book) => { 
  let genreFound = acc.find(item => item.name === book.genre)

  genreFound ? genreFound.count++ : acc.push({name: book.genre, count: 1})
  return acc;
  }, [])
        .sort((a,b) => a.count > b.count ? -1: 1)
        .slice(0,5);
}


//------------home.js #5--------------

 //here i need to return an ordered list with the books who have the most borrowed transactions
function getMostPopularBooks(books) {
  //Create an array using the map method for the book objects that will go in the array
  //name: book title, count: length of the borrowed count
  const popularBooks = books.map(book => {
    return { name: book.title, count: book.borrows.length}})
  //here i am sorting the array in descending order
  popularBooks.sort((bookA, bookB) => bookB.count - bookA.count);
  //here i use splice to ensure only the top 5 are returned 
  popularBooks.splice(5);
  return popularBooks;
}




//-----------Helper Function----------
function _sortBooks(booksToSort) {
  booksToSort.sort((objA, objB) => objB.count - objA.count)
  booksToSort.splice(5);
  return booksToSort
}



//------------home.js #6--------------

function getMostPopularAuthors(books, authors) {
  const popularAuthors = authors.map(author => {
    const booksBy = books.filter(book => book.authorId === author.id);
    const borrows = booksBy.reduce((acc, book) => acc + book.borrows.length, 0);
    const authorInfo = {
      name: `${author.name.first} ${author.name.last}`,
      count: borrows
    };
    return authorInfo;
  })
  // Helper function to sort authors in descending order and splice the top 5
  _sortBooks(popularAuthors);
  //return the full array
  return popularAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
