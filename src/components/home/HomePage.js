import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render(){
    return (
      <div className="jumbotron">
        <h1>We Got Hormones</h1>
        <p>We make your plants grow better with Auxins, Cytokinins, and Giberleslksdans</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;