import { connect } from 'react-redux'
import { toggleTodo, TodosState, TodosDispatch, getFilteredTodos } from '../store'
import { TodoList } from './TodoList'

const mapStateToProps = (state: TodosState) => ({
  todos: getFilteredTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: TodosDispatch) => ({
  onToggle(id: number) {
    dispatch(toggleTodo({ id }))
  }
})

export const FilteredTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)