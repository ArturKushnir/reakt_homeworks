import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";


const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({

    })

    const create = (data) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(data),
            method: 'POST'
        })
            .then(value => {
                if (!value.ok) {
                    throw Error('Error')
                }
                return value.json()})
            .then((value)=>{
                setUsers(prev => [...prev, value])
                reset()
            })
            .catch(e => console.log(e))
    }

    return (
        /*name, username, email*/
        <form onSubmit={handleSubmit(create)}>
            <label><input type="text" placeholder={'name'} {...register('name')}/></label>
            <label><input type="text" placeholder={'username'} {...register('username')}/></label>
            <label><input type="text" placeholder={'email'} {...register('email')}/></label>
            <button>Create user</button>
        </form>
    );
};

export {UserForm};