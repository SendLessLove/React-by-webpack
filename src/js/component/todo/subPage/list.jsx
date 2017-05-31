import React from 'react';

export default class List extends React.Component {
  handleClick(text) {
    this.props.delFun(text);
  }
  render() {
    return (
      <ul className="list-content">
        {this.props.todos.map((item, index) => {
          return (
            <li key={index}>
              <span className="list-text">{item.text}</span>
              <span className="delBtn" onClick={this.handleClick.bind(this, item.id)}>删除</span>
            </li>
          );
        })}
      </ul>
    );
  }
}