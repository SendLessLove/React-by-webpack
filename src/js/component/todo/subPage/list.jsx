import React from 'react';

export default class List extends React.Component {
  handleClick(text) {
    this.props.delFun(text);
  }
  render() {
    return (
    <ul>
      {this.props.todos.map((item, index) => {
        return (
          <li key={index} onClick={this.handleClick.bind(this, item.id)}>
            {item.text}
          </li>
        );
      })}
    </ul>
    );
  }
}