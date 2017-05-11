import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './component/todo/index';
import '../css/app';
import '../css/test.css';

ReactDOM.render(
  <Todo name="etc" />,
  document.getElementById('root')
);