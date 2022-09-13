import { useTodos, useTodosAction } from '../Provider/TodoProvider';
import Task from '../Task/Task';
import style from './tasklist.module.scss';
import { ImCalendar } from 'react-icons/im';
const TaskList = () => {
  const Todos = useTodos();
  const dispatch = useTodosAction();
  const TodosRender = () => {
    if (Todos.length)
      return Todos.map(task => {
        return <Task
          key={task.id}
          Task={task}
          OnRemove={() => dispatch({ type: 'removeTask', id: task.id })}
          OnDone={() => dispatch({ type: 'DoneTask', id: task.id })}
        />
      });
    return <div className={style.noTodyTask}>
      <ImCalendar />
      <p>هنوز کار جدیدی ایجاد نشده</p>
    </div>
  }
  return (
    <div className={style.taskWrapper}>
      {TodosRender()}
    </div>
  )
}

export default TaskList
