import React, { PropTypes } from 'react'; 
import { Link, IndexLink } from 'react-router';

// stateless functional component
const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="about" activeClassName="active">About</Link>
      {" | "}
      <Link to="books" activeClassName="active">Books</Link>
    </nav>
  );
};

export default Header;