import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

export enum VisibilityFilter {
  SHOW_COMPLETED,
  SHOW_ACTIVE,
  SHOW_ALL
}

export interface ITodoItem {
  id: number,
  label: string,
  completed: boolean
}

const initialState: {
  todos: Array<ITodoItem>,
  visibilityFilter: VisibilityFilter
} = {
  todos: [
    { id: 1, label: 'read the docs', completed: true },
    { id: 2, label: 'create todo app', completed: false },
    { id: 3, label: 'take feedback', completed: false }
  ],
  visibilityFilter: VisibilityFilter.SHOW_ALL
}

let nextId: number = 0

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<{ label: string }>) {
      const { label } = action.payload

      state.todos.push({ id: nextId++, label, completed: false })
    },
    toggleTodo(state, action: PayloadAction<{ id: number }>) {
      const todo = state.todos.find(todo => todo.id === action.payload.id)

      if (todo) {
        todo.completed = !todo.completed
      }
    },
    changeVisibility(state, action: PayloadAction<{ filter: VisibilityFilter }>) {
      state.visibilityFilter = action.payload.filter
    }
  }
})


export const { addTodo, toggleTodo, changeVisibility } = todos.actions
export const store = configureStore({
  reducer: todos.reducer
})
export type TodosState = ReturnType<typeof store.getState>
export type TodosDispatch = typeof store.dispatch

export const getFilteredTodos = (todos: Array<ITodoItem>, filter: VisibilityFilter): Array<ITodoItem> => {
  switch (filter) {
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)

    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    
    case VisibilityFilter.SHOW_ALL:
    default:
      return todos
  }
}
