import { useTodos, useTodosAction } from '../Provider/TodoProvider';
import Task from '../Task/Task';
import style from './tasklist.module.scss';
import { ImCalendar } from 'react-icons/im'
const TaskList = () => {
  const Todos = useTodos();
  const dispatch = useTodosAction();
  const TodosRender = () => {
    if (Todos.length)
      return Todos.map(task => {
        return <Task
          key={task.id}
          Task={task}
        />
      });
    return <div className={style.noTodyTask}><ImCalendar /></div>
  }
  return (
    <div className={style.taskWrapper}>
      {TodosRender()}
    </div>
  )
}

export default TaskList
