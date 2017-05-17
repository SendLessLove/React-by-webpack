import React, { Component } from 'react';

// import Dog from '../../../img/big_dog.jpg';
import Input from './subpage/input.jsx';
import List from './subpage/list.jsx';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  // 提交todo list
  submitFn(value) {
    const id = this.state.todos.length;
    this.setState({
      todos: this.state.todos.concat({
        id,
        text: value
      }),
    });
  }

  // 删除操作
  delFun(text) {
    const data = this.state.todos;
    this.setState({
      todos: data.filter(item => {
        if(item.id !== text) {
          return item
        }
      })
    })
  }

  render() {
    return (
      <div>
        <Input submitFn={this.submitFn.bind(this)}/>
        <List todos={this.state.todos} delFun={this.delFun.bind(this)}/>
      </div>
    );
  }
}
