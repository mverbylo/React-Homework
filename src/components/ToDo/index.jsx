import CreateTaskForm from './CreateTaskForm';
import TasksList from './TasksList';
import styles from './ToDo.module.scss';
const { todoListSection, heading} = styles;

const TodoList = () => {
  return (
    <section className={todoListSection}>
      <h1 className={heading}>ToDo</h1>
      <CreateTaskForm />
      <TasksList />
    </section>
  );
};

export default TodoList;
