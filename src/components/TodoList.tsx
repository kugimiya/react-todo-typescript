import React from 'react'
import { TodoItem } from './TodoItem'
import { ITodoItem } from '../store'

interface TodoListProps {
  todos: Array<ITodoItem>,
  onToggle: (id: number) => void
}

export function TodoList({
  todos = [],
  onToggle
}: TodoListProps) {
  return (
    <div className='section__todos todos'>
      { todos.map(todo => (
        <TodoItem
          key={ todo.id }
          onToggle={ () => onToggle(todo.id) }
          { ...todo }
        />
      )) }
    </div>
  )
}
