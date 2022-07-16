import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import Champ from '../../models/Champ';
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const data = { email, password }
    const navigate = useNavigate();
    const inputData = [
        // { title: "E-mail", id: "email", type: "email", setData: setEmail },
        new Champ("E-mail","email","email",setEmail),
        new Champ("Mot de passe","password","password",setPassword)
    ]
    const successLogin = (data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log(data, data.user);
        navigate("/home");
    }
    return <AuthForm title={"Connection"} inputData={inputData} data={data} responseRequet={successLogin} root={"login"} />
}

export default LoginForm