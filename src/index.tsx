import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store';

import { FilteredTodoList } from './components/FilteredTodoList'
import { Filter } from './components/Filter'
import { AddTodo } from './components/AddTodo'

import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <div className='section'>
        <AddTodo />
        <Filter />
        <FilteredTodoList />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
