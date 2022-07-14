import React from 'react'

const InputGroup = ({ inputData }) => {
    return (
        <p>
            <label htmlFor={inputData.id}>{inputData.title}</label>
            <br />
            <input onChange={(e) => inputData.setData(e.target.value)} type={inputData.type} id={inputData.id} />
        </p>
    )
}

export default InputGroup;