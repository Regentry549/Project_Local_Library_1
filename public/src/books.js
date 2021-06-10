function findAuthorById(authors, id) {
    let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  const checkedOut = books.filter((book) =>
  book.borrows[0].returned === false);
  result.push(checkedOut);
  
  const returnedYes = books.filter((book) =>
  book.borrows[0].returned === true);
  result.push(returnedYes);
  return result; 
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id)
    return { ...borrow, ...account}
  }).slice(0, 10)
  
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
