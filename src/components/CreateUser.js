import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function CreateUser() {
    const [inputs,setInputs] =  useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name  = event.target.name;
        const value = event.target.value;

        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value
        }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:80/api/user/save',inputs).then(function(response){
            console.log(response.data);
            navigate("/");
        })

        
    }
  return (
    <div>
    <h1>CreateUser</h1>
    <form onSubmit={handleSubmit}>
        <div>
        <label>Name</label>
        <input type="text" name='name' onChange={handleChange}/>
        </div>
        <div>
        <label>Address</label>
        <input type="text" name='address'  onChange={handleChange}/>
        </div>
        <div>
        <button >Create User</button>
        </div>
    </form>

    </div>
  )
}
