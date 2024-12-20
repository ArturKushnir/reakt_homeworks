import React, {useState} from 'react';
import {Users} from "./users/Users";
import {UserForm} from "./userForm/UserForm";
/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера
постовим запитом на https://jsonplaceholder.typicode.com/users*/
const UserContainer = () => {
    const [users, setUsers] = useState([])


    return (
        <div>
            <UserForm users={users} setUsers={setUsers}/>
            <Users users={users} setUsers={setUsers}/>
        </div>
    );
};

export {UserContainer};