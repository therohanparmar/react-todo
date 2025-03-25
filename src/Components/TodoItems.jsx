import './CSS/TodoItems.css'
import tick from './Assets/tick.png'
import not_tick from './Assets/not_tick.png'
import cross from './Assets/cross.png'

const TodoItems = ({no, display, text, setTodo}) => {

    const deleteTask = (no) => {
        let data = JSON.parse(localStorage.getItem("todoList"));
        data = data.filter((data) => data.no !== no);
        setTodo(data);
    }

    const toggle = () => {
        let data = JSON.parse(localStorage.getItem("todoList"));
        for (let i = 0; i < data.length; i++){
            if (data[i].no === no) {
                if (data[i].display === "") {
                    data[i].display = "line-through";
                } else {
                    data[i].display = "";
                }
                break;
            }
        }
        setTodo(data);
    }

  return (
    <div className='todo-items'>
      <div className={`todo-items-container ${display}`} onClick={()=>{toggle(no)}}>
        {display==="" ?<img src={not_tick} alt="" className='check-img' />:<img src={tick} alt="" className='check-img' />}
        <div className="todo-items-text">{text}</div>
      </div>
      <img className='todo-items-cross-icon' src={cross} alt="" onClick={() => deleteTask(no)} />
    </div>
  )
}

export default TodoItems
