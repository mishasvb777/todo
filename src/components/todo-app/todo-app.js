import HeaderApp from "../header-app";
import TaskList from "../task-list";
import Footer from "../footer"
import './todo-app.css'
import { formatDistanceStrict } from 'date-fns'


 

const TodoApp = () => {  

  let dateText = formatDistanceStrict(new Date(2023, 2, 13, 12, 52, 22), new Date(), { includeSeconds: true })


  const todoData = [
    {id: 1, taskText: "Completed task", time: `created ${dateText} ago` , statusTask : "completed"},
    {id: 2, taskText: "Task #2", time: `created ${dateText} ago`, statusTask : "editing"},
    {id: 3, taskText: "Active task", time: `created ${dateText} ago`}
  ];
 

  return (
    <div className="todoapp">
      <div className="main">
        <HeaderApp />
        <TaskList todos = {todoData}/>
        <Footer />
      </div>   
    </div>
  );
}

export default TodoApp; 
