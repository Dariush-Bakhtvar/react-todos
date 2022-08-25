import React from 'react'
import Content from './Components/Content/Content'
import Navbar from './Components/Navbar/Navbar'
import TodoProvider from './Components/Provider/TodoProvider'

const App = () => {
  return (
    <TodoProvider>
      <Navbar />
      <Content />
    </TodoProvider>
  )
}

export default App
