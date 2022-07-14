import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirst] = useState('');
    const [lastname, setLast] = useState('');
    const data = {email,password,firstname,lastname};
    const inputData = [
        { title: "Prenom", id: "prenom", type: "text", setData: setFirst },
        { title: "Nom", id: "nom", type: "text", setData: setLast },
        { title: "E-mail", id: "email", type: "email", setData: setEmail },
        { title: "Mot de passe", id: "password", type: "password", setData: setPassword },
    ]
    const successRegister = (data)=>{
        console.log(data);
        navigate("/login");
    }
    return <AuthForm title={"Inscription"} root={"register"} inputData={inputData} responseRequet={successRegister} data={data} />
}

export default RegisterForm;