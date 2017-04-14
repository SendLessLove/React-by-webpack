import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <a href="www.baidu.com">百度</a>
        <a href="www.github.com">github</a>
        <a href="#">{this.props.name}</a>
      </nav>
    );
  }
}

export default Header;