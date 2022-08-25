import React, { useContext } from 'react'
import {SettingsContext} from './context/setting/settingContext'

export default function Hestory() {
  const myContect=useContext(SettingsContext);
  //  const data =()=>(list.map((element, index) => {
  //   if (element % 2 === 0) {
  //     return <h2 key={index}>{element}</h2>;
  //   }
  return (
    <div>
    {myContect.list.map(item => (
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
