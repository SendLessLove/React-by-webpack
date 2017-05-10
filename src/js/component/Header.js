import React, { Component } from 'react';

import Dog from '../../img/big_dog.jpg';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <a href="http://www.baidu.com">baidu</a>
          <a href="http://www.github.com">github</a>
          <a href="#">{this.props.name}..</a>
        </nav>
        <div className="test">
          <span className="loading"></span>
          <img src={Dog} alt="" />
        </div>
      </div>
    );
  }
}
