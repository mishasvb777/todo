import NewTaskForm from "../new-task-form";

const HeaderApp = () => {

  return (
    <header className = "header">
      <h1>todos</h1>
      <NewTaskForm />
    </header>
  );
}

export default HeaderApp;