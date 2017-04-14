import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
  render() {
    return (
      <div>hello {this.props.name}</div>
    );
  }
}

ReactDOM.render(
  <Index name="yusin" />,
  document.getElementById('root')
);