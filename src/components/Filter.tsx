import React from 'react'
import { connect } from 'react-redux'
import { changeVisibility, VisibilityFilter, TodosState, TodosDispatch } from '../store'

const mapStateToProps = (state: TodosState) => ({
  visibility: state.visibilityFilter
})

const mapDispatchToProps = (dispatch: TodosDispatch) => ({
  onVisibilityChange(filter: VisibilityFilter) {
    dispatch(changeVisibility({ filter }))
  }
})

export const Filter = connect(mapStateToProps, mapDispatchToProps)(FilterComponent)

interface FilterComponentProps {
  visibility: VisibilityFilter,
  onVisibilityChange: (filter: VisibilityFilter) => void
}

function FilterComponent({
  visibility, onVisibilityChange
}: FilterComponentProps) {
  return (
    <div className='section__filter'>
      Display:
      <select
        className='section__filter-selector'
        onChange={ (ev: React.FormEvent<HTMLSelectElement>) => {
          onVisibilityChange(+ev.currentTarget.value as unknown as number); // WTF? How can I convert `value: string` to `VisibleFilter` safe?
        } }
        value={ visibility }
      >
        <option value={ VisibilityFilter.SHOW_ALL }>All</option>
        <option value={ VisibilityFilter.SHOW_ACTIVE }>Active</option>
        <option value={ VisibilityFilter.SHOW_COMPLETED }>Completed</option>
      </select>
    </div>
  )
}
