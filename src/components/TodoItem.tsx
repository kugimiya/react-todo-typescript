import React from 'react'
import { ITodoItem } from '../store'

interface TodoItemProps extends ITodoItem {
  onToggle: () => void
}

export function TodoItem({ label = '', completed = false, onToggle }: TodoItemProps) {
  return (
    <div className={`todos__item${ completed ? ' todos__item--completed' : '' }`}>
      <button className='todos__toggler' onClick={ onToggle } >{ completed ? '💤' : '✨' }</button>
      &nbsp;&nbsp;
      <span className='todos__label'>{ label }</span>
    </div>
  )
}
