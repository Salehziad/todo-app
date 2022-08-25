import React from 'react'
import './list.css'
export default function List({item,toggleComplete,deleteItem}) {
  return (
    <div key={item.id} className={item.show?'':'hide'}>
    <p>{item.text}</p>
    <p><small>Assigned to: {item.assignee}</small></p>
    <p><small>Difficulty: {item.difficulty}</small></p>
    <p><small>id: {item.id}</small></p>
    <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()} className:{item.show.toString()}</div>
    <button onClick={() => deleteItem(item.id)}>Delete Item</button>
    <hr />
  </div>
  )
}
