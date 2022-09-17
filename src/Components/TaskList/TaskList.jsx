import { useTodos, useTodosAction } from '../Provider/TodoProvider';
import Task from '../Task/Task';
import style from './tasklist.module.scss';
import { ImCalendar } from 'react-icons/im';
// import { compareAsc, format, newDate, isToday } from 'date-fns-jalali';
import FilterDate from '../Filter/FilterDate/FilterDate';
// import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
const TaskList = () => {
  const Todos = useTodos();
  const dispatch = useTodosAction();
  const TodosRender = () => {
    // console.log(format(newDate(1401, 5, 26), 'yyyy MMMM d'), isToday(newDate(1401, 5, 26)));
    const tomarrow = new DateObject({ calendar: persian, locale: persian_fa, format: "D MMMM YYYY" }).add(1, "day");
    console.log(tomarrow.format());
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
      <FilterDate />
      {TodosRender()}
    </div>
  )
}

export default TaskList
