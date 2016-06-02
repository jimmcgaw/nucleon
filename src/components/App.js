import React, { PropTypes } from 'react';

class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <p>Hormones for Plants</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;