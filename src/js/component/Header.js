import React, { Component } from 'react';

import Dog from '../../img/big_dog.jpg';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="nav">
        <a href="http://www.baidu.com">baidu</a>
        <a href="http://www.github.com">github</a>
        <a href="#">{this.props.name}..</a>
        <div className="loading"></div>
        <img src={Dog} alt="" />
      </nav>
    );
  }
}
