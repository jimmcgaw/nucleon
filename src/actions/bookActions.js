import * as actionTypes from './actionTypes';

export function createBook(book){
//  return {'type': 'CREATE_BOOK', book : book };
  return {'type': actionTypes.CREATE_BOOK, book };  // ES6 makes this the same as above
}
