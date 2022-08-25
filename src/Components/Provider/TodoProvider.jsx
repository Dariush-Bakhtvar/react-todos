import { createContext, useContext, useReducer } from 'react'
const TodsContext = createContext();
const TodosContextDispatcher = createContext();
const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
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
