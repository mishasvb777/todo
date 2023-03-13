import TodoCount from "../todo-count";
import Filters from "../filters";
import ClearCompleted from "../clear-completed";
import './footer.css'

const Footer = () => {

  return (
    <footer className="footer">
      <TodoCount />
      <Filters />
      <ClearCompleted />
    </footer>
  );
}

export default Footer;
