import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup/Signup'
import Login from './Login/Login'

function App() {
   let [isLogin , setIsLogin] = useState(true)
   const handleSwitchToLogin = () => {
    console.log('Switching to Login');
    setIsLogin(true);
  };

  const handleSwitchToSignUp = () => {
    console.log('Switching to SignUp');
    setIsLogin(false);
  };
  return (
    <>
     {isLogin ? <Login switchToSignup={handleSwitchToSignUp}/> : <Signup switchToLogin={handleSwitchToLogin}/>
     }
    </>
       
  )
}

export default App
