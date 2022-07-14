import React from 'react'
import LoginForm from '../components/auth/Login'
import Layout from '../template/Layout'

const Login = () => {
  return (
    <Layout content={<LoginForm/>}/>
  )
}

export default Login