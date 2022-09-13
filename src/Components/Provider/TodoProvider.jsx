import { createContext, useContext, useReducer } from 'react'
const TodsContext = createContext();
const TodosContextDispatcher = createContext();
const initialState = [];
let copyState = [];
const reducer = (state, action) => {
  const index = state.filter(task => task.id === action.id);
  //clone of favorite task
  const cloneTask = { ...state[index] };
  //clone of all tasks
  const cloneTasks = [...state];
  copyState = [...cloneTasks];
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
      return [...cloneTasks, task];
    case 'removeTask':
      const RemoveTask = state.filter(task => task.id !== action.id);
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
      console.log(doneAll);
      return cloneTasks
    case 'removeAllTask':
      return initialState;
    case 'search':
      const value = action.value;
      const result = value ? copyState.filter(task => task.whatDo.includes(value.toLowerCase())) : copyState;
      console.log(cloneTasks, copyState, result);
      return result;
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
