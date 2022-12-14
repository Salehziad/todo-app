import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import {SettingsContext} from '../../context/setting/settingContext'
import { v4 as uuid } from 'uuid';
import List from './List.jsx';
import { Link } from 'react-router-dom';
const LOCAL_STORAGE_KEY = "react-todo-list-todos";
const ToDo = () => {
  const [todos, setTodos] = useState([]);
  // console.log(todos);
  const myContect=useContext(SettingsContext);
  // console.log(myContect.x);

  const [defaultValues] = useState({
    difficulty: 4,
  });
  // const [list, myContect.setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    item.show=true;
    myContect.setList([...myContect.list, item]);
    setTodos([item, ...todos]);
  }

  function deleteItem(id) {
    // const items = myContect.list.filter( item => item.id !== id );
    // myContect.setList(items);
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function toggleComplete(id) {
    console.log(todos);
    const items = todos.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
        // item.show=! item.show;
      }
      return item;
    });
    setTodos(items);

  }
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
    myContect.list.sort((a,b) => (a.difficulty > b.difficulty) ? 1 : ((b.difficulty > a.difficulty) ? -1 : 0));
    let incompleteCount = myContect.list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do myContect.List: ${incomplete}`;
  }, []);
  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <header>
        <h1>To Do myContect.List: {incomplete} items pending</h1>
        <Link to='/hestory'>hestory</Link>
      </header>

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>numbers</span>
          <input onChange={(e)=>{console.log(e.target.value)}} name="numbers" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>

      {
        todos.map((item,idx)=>(
          item.complete?
          null:
          <List key={idx} item={item} toggleComplete={toggleComplete} deleteItem={deleteItem}/>
      ))
      }
    </div>
  );
};

export default ToDo;
