function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let count = 0;
  books.forEach(book => {
      if(book.borrows[0].returned === false)
        count++;})
  return count;
}

function getMostCommonGenres(books) {

  const commonGenres = books.reduce((common, book) => {
    common[book.genre] = 0;
    return common;
  }, {});

  for(let i = 0; i < books.length; i++){
    if(books[i].genre in commonGenres){
      commonGenres[books[i].genre] ++;
    }
    else{
      commonGenres[books[i].genre] = 1;
    }
  }
  console.log(commonGenres);
  const result = [];
  for (let key in commonGenres){
    const currentObj = {
      name : key,
      count : commonGenres[key]
    }
    result.push(currentObj);
  }
  result.sort((a,b) => b.count - a.count);
  const finalResult = result.slice(0,5);
  console.log(finalResult);
  return finalResult;
  
}

                                               
function getMostPopularBooks(books) {
//  console.log(books);
 
  const result = [];
  for(let i = 0; i < books.length; i++){
    const currentObj = {
      name : books[i].title,
      count : books[i].borrows.length
    }
    result.push(currentObj);
  }
  
  result.sort((a,b) => b.count - a.count);
  const finalResult = result.slice(0,5);
  return finalResult;
}


function getMostPopularAuthors(books, authors) {

  let result = [];

  for(let i = 0; i < authors.length; i++){
    for(let j = 0; j < books.length; j++){
    if(authors[i].id === books[j].authorId){
      const currentObj = {
        name : authors[i].name.first + " " + authors[i].name.last,
        count : books[j].borrows.length
      }
      result.push(currentObj);
    }
     
  }}
  console.log(result);

  result.sort((a,b) => b.count - a.count);
  const finalResult = result.slice(0,5);
  //console.log(finalResult);
  return finalResult;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
