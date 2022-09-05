import { createContext, useContext, useReducer } from 'react'
const TodsContext = createContext();
const TodosContextDispatcher = createContext();
const initialState = [];
const reducer = (state, action) => {
  const index = state.filter(task => task.id === action.id);
  //clone of favorite task
  const cloneTask = { ...state[index] };
  //clone of all tasks
  const cloneTasks = [...state];
  switch (action.type) {
    case 'newTask':
      const task = {
        id: new Date().valueOf(),
        icon: action.icon,
        tasktype: action.selectTask,
        whatdo: action.WhatDo,
        wheredo: action.WhereDo,
        date: {
          day: action.WhenDo[0],
          month: action.WhenDo[1],
          year: action.WhenDo[2],
          time: action.WhatDo[3]
        },
        isCompelete: false
      }
      return [...cloneTasks, task];
    case 'removeTask':
      const RemoveTask = state.filter(task => task.is !== action.id);
      return RemoveTask;
    case 'compeleteTask':
      cloneTask.isCompelete = !cloneTask.isCompelete;
      cloneTasks[index] = cloneTasks
      return cloneTasks
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
