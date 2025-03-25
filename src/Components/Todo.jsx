import { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'
import TodoItems from './TodoItems';

let count = 0;

const Todo = () => {

  const [todo, setTodo] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodo([...todo,{no: count++, text: inputRef.current.value, display: ''}]);
    inputRef.current.value = '';
    localStorage.setItem("todo_count", count)
  }

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem("todoList")))
    count = localStorage.getItem("todo_count")
  },[])

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("todoList", JSON.stringify(todo));
    }, 1000);
  }, [todo])

  return (
    <div className='todo'>
      <div className='todo-header'>To-Do List</div>
      <div className='todo-add'>
        <input type="text" placeholder='Add Your Task' className='todo-input' ref={inputRef} />
        <div className="todo-add-btn" onClick={()=>{add()}}>Add</div>
      </div>
        <div className='todo-list'>
            {todo.map((item,index) => {
              return <TodoItems no={item.no} display={item.display} text={item.text} setTodo={setTodo} key={index} />
            })}
      </div>
    </div>
  )
}

export default Todo
