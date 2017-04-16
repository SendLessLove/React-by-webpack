import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <a href="http://www.baidu.com">百度</a>
        <a href="http://www.github.com">github</a>
        <a href="#">{this.props.name}</a>
      </nav>
    );
  }
}

export default Header;