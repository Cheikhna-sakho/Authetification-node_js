import React, { useState } from 'react';
import InputGroup from '../InputGroup';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ title, data, inputData, root, responseRequet }) => {
    //
    const navigate = useNavigate();
    const option = title === "Inscription" ? {name: "connectez-vous",path: "/login"}:{name: "inscriez-vous",path: "/register"}
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            for (let item in data) {
                if (data[item].trim() === "") {
                    setError("Veillez renseigner tous les champs");
                    return;
                } else setError("");
            }
            const config = {
                method: 'post',
                url: 'http://localhost:1212/auth/' + root,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            axios(config)
                .then(function (res) {
                    const dataResponse = res.data;
                    responseRequet(dataResponse);
                })
                .catch(function (error) {
                    const message = error.response.data.message;
                    console.log(error.response.data);
                    setError(message)
                });
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="center grid-row login">
            <div className=''>
                <h2 className='form-tilte'>{title}</h2>
                <p className='error'>{error}</p>
                <form onSubmit={(e) => handleSubmit(e)}>
                    {inputData.map((value, i) => <InputGroup key={i} inputData={value} />)}
                    <input type="submit" value={title} />
                    <p className='alter' onClick={()=>navigate(option.path)}>{option.name}</p>
                </form>
            </div>
        </div>
    )
}

export default AuthForm;