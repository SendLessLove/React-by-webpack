import React, { Component } from 'react';

import AddBox from './subpage/addBox.jsx';
import List from './subpage/list.jsx';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  componentDidMount() {
    if(localStorage.todolist) {
      const getTODO = JSON.parse(localStorage.getItem('todolist'));
      this.setState({
        todos: getTODO,
      });
    }
  }

  // 提交todo list
  submitFn(value) {
    const id = this.state.todos.length;
    this.setState({
      todos: this.state.todos.concat({
        id,
        text: value
      }),
    }, () => {
      const localTodo = JSON.stringify(this.state.todos)
      localStorage.setItem('todolist', localTodo);
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
    }, () => {
      const localTodo = JSON.stringify(this.state.todos)
      localStorage.setItem('todolist', localTodo);
    })
  }

  render() {
    return (
      <div id="todo">
        <AddBox submitFn={this.submitFn.bind(this)}/>
        <List todos={this.state.todos} delFun={this.delFun.bind(this)}/>
      </div>
    );
  }
}
