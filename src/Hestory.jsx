import React, { useContext } from 'react'
const LOCAL_STORAGE_KEY = "react-todo-list-todos";

export default function Hestory() {
  const myContect=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //  const data =()=>(list.map((element, index) => {
  //   if (element % 2 === 0) {
  //     return <h2 key={index}>{element}</h2>;
  //   }
  return (
    <div>
    {myContect.map(item => (
      item.complete?
        <div key={item.id}>
        <p>{item.text}</p>
        <p><small>Assigned to: {item.assignee}</small></p>
        <p><small>Difficulty: {item.difficulty}</small></p>
        <hr />
        </div>
      :null
        ))}</div>
  )
}
