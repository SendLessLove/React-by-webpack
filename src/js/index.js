import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
  render() {
    return (
      <div>hello world</div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);