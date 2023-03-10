import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../../redux/actions/auth.action'
import './loginScreen.scss'


const LoginScreen = () => {

  const dispatch = useDispatch()

  const accessToken = useSelector(state=>state.auth.accessToken)

  const handleLogin = () => {
    dispatch(login())
  }

  const history = useHistory()

  useEffect(()=>{
  if(accessToken){
    history.push('/')
  }
  },[accessToken, history])
  return (
    <div className="login">
        <div className="login__container">
            <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="Logo" />
            <button onClick={handleLogin}>Login with google</button>
            <p>This project is made using YOUTUBE DATA API</p>
        </div>
    </div>
  )
}

export default LoginScreen
