import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Auth from './pages/auth'
import CommonLayout from './components/common-layout'
import Task from './pages/task'
import ScrumBoardPage from './pages/scrum-board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/auth" element={<Auth/>} />
      <Route path="/task" element={<CommonLayout/>}>
        <Route path="list" element={<Task/>} />
        <Route path="scrum-board" element={<ScrumBoardPage/>} />
      </Route>      
    </Routes>
  )
}

export default App
