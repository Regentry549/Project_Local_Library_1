function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  let newSort = accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
  return newSort;
}

function getTotalNumberOfBorrows(account, books) {
let result = 0;
   books.forEach( ( book ) => { 
     book.borrows.forEach( ( borrow ) => {
     if (account.id === borrow.id) {
       result ++;
      }
   }
)});
    return result;     
}   


function getAuthorByBook(authors, filteredBooksArr) { 
    filteredBooksArr.forEach(item => { 
      const author = authors.find(author => { 
      if(author.id === item.authorId) { 
        return author; 
      }
    })
    item.author = author }) 
} 

function getBooksPossessedByAccount(account, books, authors) { 
  const accountId = account.id; 
  const filteredBooks = []; 
  for(let i = 0; i < books.length; i++) {
    for(let j = 0; j < books[i].borrows.length; j++) { 
      if(account.id === books[i].borrows[j].id && books[i].borrows[j].returned === false)
      { filteredBooks.push(books[i]) } } } 
  getAuthorByBook(authors, filteredBooks) 
  return filteredBooks; 
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
