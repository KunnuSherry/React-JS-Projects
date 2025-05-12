import './App.css'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import AuthPage from './pages/private-route'
import {Routes, Route} from "react-router-dom"
import ProfilePage from './pages/profile'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route 
        path="/profile" 
        element={<AuthPage>
          <ProfilePage/>
        </AuthPage>}/>
        
      </Routes>
    </div>
  )
}

export default App
