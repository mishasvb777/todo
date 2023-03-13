import Task from "../task";
import Edit from "../edit"
import './task-list.css'

const TaskList = ({ todos }) => {
  const elements = todos.map((item) => {

    const {id, statusTask = '', ...itemProps} = item;

    return (
      <li key = {id} className={statusTask}>
        <Task { ...itemProps} />
        <Edit />  
      </li>
    );   
  });

  return (
    <ul className="todo-list">
     {elements}
    </ul>
  );
  
}

export default TaskList;