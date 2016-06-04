import React from 'react';

import { connect } from 'react-redux';

import * as bookActions from '../../actions/bookActions';

class BooksPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      book: { title: "" }
    };
    
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.bookRow = this.bookRow.bind(this);
  }
  
  onTitleChange(event){
    const book = this.state.book;
    book.title = event.target.value;
    this.setState({book: book});
  }
  
  onClickSave(){
    this.props.dispatch(bookActions.createBook(this.state.book));
  }
  
  bookRow(book, index) {
    return <div key={index}>{ book.title }</div>;
  }
  
  render(){
    return (
      <div>
        <h1>Books</h1>
        {this.props.books.map(this.bookRow)}
        <h2>Create New Book</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.book.title} />
        <input type="submit" value="Save" onClick={this.onClickSave} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    books: state.books
  };
}


export default connect(mapStateToProps)(BooksPage);