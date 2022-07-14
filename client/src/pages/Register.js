import React from 'react'
import RegisterForm from '../components/auth/Register'
import Layout from '../template/Layout'

const Register = () => {
  return <Layout content={<RegisterForm/>} />
}

export default Register