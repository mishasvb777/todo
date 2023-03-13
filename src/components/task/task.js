import './task.css'

const Task = ({taskText, time}) => {
   

  return (    
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>
        <span className="description">{taskText}</span>
        <span className="created">{time}</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>       
  );
}

export default Task;