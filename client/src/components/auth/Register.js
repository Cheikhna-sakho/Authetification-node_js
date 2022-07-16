import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import Champ from '../../models/Champ';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirst] = useState('');
    const [lastname, setLast] = useState('');
    const data = {email,password,firstname,lastname};
    const inputData = [
        new Champ("prenom","prenom","text",setFirst),
        new Champ("Nom","nom","text",setLast),
        new Champ("E-mail","email","email",setEmail),
        new Champ("Mot de passe","password","password",setPassword)
    ]
    const successRegister = (data)=>{
        console.log(data);
        navigate("/login");
    }
    return <AuthForm title={"Inscription"} root={"register"} inputData={inputData} responseRequet={successRegister} data={data} />
}

export default RegisterForm;