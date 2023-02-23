import React from 'react'
import './index.css'

const TodoItem = ({id, content}) => {
  return (
    <div className="todo-item--container">
      <div className="todo-item-title--container">
        <span>
          <p>
            <b>TODO ID</b>: {id}
          </p>
        </span>
        <div className="todo-item-title--divider" />
      </div>
      <div className="todo-item-content--container">
        <div dangerouslySetInnerHTML={{ __html: content}} />
      </div>
    </div>
  )
}

export default TodoItem