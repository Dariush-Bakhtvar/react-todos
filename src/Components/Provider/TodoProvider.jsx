import { createContext, useContext, useReducer } from 'react';
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const toDayObj = new DateObject({ calendar: persian, locale: persian_fa, format: "D MMMM YYYY", });
const TodsContext = createContext();
const TodosContextDispatcher = createContext();
const initialState = [];
let filterState = [];
const reducer = (state, action) => {
  const index = state.filter(task => task.id === action.id);
  //clone of favorite task
  const cloneTask = { ...state[index] };
  //clone of all tasks
  let cloneTasks = [...state];
  switch (action.type) {
    case 'newTask':
      const task = {
        id: new Date().valueOf(),
        icon: action.icon,
        taskType: action.selectTask,
        whatDo: action.WhatDo,
        whereDo: action.WhereDo,
        date: {
          day: action.WhenDo[0],
          month: action.WhenDo[1],
          year: action.WhenDo[2],
          time: action.WhenDo[3]
        },
        isDone: false
      }
      filterState.push(task);
      return [...cloneTasks, task];
    case 'removeTask':
      const RemoveTask = state.filter(task => task.id !== action.id);
      filterState = [...RemoveTask];
      return RemoveTask;
    case 'DoneTask':
      cloneTask.isDone = !cloneTask.isDone;
      cloneTasks[index] = cloneTask;
      return cloneTasks;
    case 'editTask':
      const editTask = cloneTasks.find(task => task.id === action.id);
      editTask.whatDo = action.EditWhatDo;
      editTask.whereDo = action.EditWhereDo;
      editTask.date = {
        day: action.EditDate[0],
        month: action.EditDate[1],
        year: action.EditDate[2],
        time: action.EditDate[3]
      };
      cloneTasks[index] = editTask;
      return cloneTasks
    case 'doneAllTask':
      const doneAll = cloneTasks.map(task => task);
      doneAll.forEach(task => task.isDone = true);
      cloneTasks = [...doneAll]
      return cloneTasks
    case 'removeAllTask':
      filterState = [];
      return initialState;
    case 'filter': {
      const value = action.event;
      const filter = value !== 'All' ? filterState.filter(task => task.taskType === value) : filterState;
      return filter;
    }
    case 'search': {
      const value = `${action.event}`.toLowerCase();
      if (action.isCheck) {
        const result = value ? state.filter(task => task.whatDo.includes(value) || task.whereDo.includes()) : state;
        return result;
      } else {
        const result = value ? filterState.filter(task => task.whatDo.includes(value) || task.whereDo.includes()) : filterState;
        return result;
      }
    }
    case 'filterDate': {
      const Today = toDayObj.format().toString().split(" ");
      const value = action.event;
      const filterDate = [...filterState];
      if (value === 'امروز') {
        return filterDate.filter(task => task.date.day.includes(Today[0]) && task.date.month.includes(Today[1]));
      } else {
        const anohterDays = action.event.toString().split(" ");
        return filterDate.filter(task => task.date.day.includes(anohterDays[0]) && task.date.month.includes(anohterDays[1]));
      }

    }
    default:
      throw new Error('please selected considered task');
  }
}
const TodoProvider = ({ children }) => {
  const [Todo, Dispatch] = useReducer(reducer, initialState);
  return (
    <TodsContext.Provider value={Todo}>
      <TodosContextDispatcher.Provider value={Dispatch}>
        {children}
      </TodosContextDispatcher.Provider>
    </TodsContext.Provider>
  )
}

export default TodoProvider
export const useTodos = () => useContext(TodsContext);
export const useTodosAction = () => useContext(TodosContextDispatcher);
