import { useTodos, useTodosAction } from '../Provider/TodoProvider';
import Task from '../Task/Task';
import style from './tasklist.module.scss';
import { ImCalendar } from 'react-icons/im';
import FilterDate from '../Filter/FilterDate/FilterDate';
import { BsUiChecks } from 'react-icons/bs'
import { IoMdTrash } from 'react-icons/io'
const TaskList = () => {
  const Todos = useTodos();
  const dispatch = useTodosAction();
  const showFilter = () => {
    if (Todos.length)
      return <div className={style.Filter}>
        <FilterDate />
        <ul className={style.manageTask}>
          <li onClick={() => dispatch({ type: 'doneAllTask' })}>
            <BsUiChecks />
          </li>
          <li onClick={() => dispatch({ type: 'removeAllTask' })}>
            <IoMdTrash />
          </li>
        </ul>
      </div>
  }

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
      {showFilter()}
      {TodosRender()}
    </div>
  )
}

export default TaskList;
