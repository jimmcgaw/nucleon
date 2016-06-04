import { combineReducers } from 'redux';
import books from './bookReducer';

// calling this books instead of booksReducer since we'll
// use this alias through the application
const rootReducer = combineReducers({
  books
});

export default rootReducer;