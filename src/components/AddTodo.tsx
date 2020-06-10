import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, TodosDispatch } from '../store'

const mapDispatchToProps = (dispatch: TodosDispatch) => ({
  onAdd(label: string) {
    dispatch(addTodo({ label }))
  }
})

export const AddTodo = connect(null, mapDispatchToProps)(AddTodoComponent)

interface AddTodoComponentProps {
  onAdd: (label: string) => void
}

function AddTodoComponent({ onAdd }: AddTodoComponentProps) {
  const [ newLabel, changeLabel ] = useState('')

  return (
    <div className='section__add'>
      <input
        className='section__add-input'
        type='text'
        placeholder='New todo text'
        value={ newLabel } 
        onChange={ ev => changeLabel(ev.target.value) }
      />

      <button
        className='section__add-button'
        type='button'
        onClick={ () => {
          if (newLabel.length === 0) {
            alert('Fill todo text field')
            return
          }

          onAdd(newLabel)
          changeLabel('')
        } }
      >💦</button>
    </div>
  )
}
