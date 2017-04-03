var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }, {
    id: 2,
    text: 'Check mail',
    completed: false,
    completedAt: undefined,
    createdAt: 500
  }];
  var store = configure({
    todos
  });
  var provider = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <ConnectedTodoList />
    </Provider>
);
  //Looking in provider for ConnectedTodoList:
  var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
  //how many ConnectedTodos where rendered?
  var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

  expect(todosComponents.length).toBe(todos.length);

  });
});
