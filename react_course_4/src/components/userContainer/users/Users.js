import React, {useEffect} from 'react';
import {User} from "./user/User";

const Users = ({users, setUsers}) => {
    /*Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера
постовим запитом на https://jsonplaceholder.typicode.com/users*/


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(val => val.json())
            .then(val=>setUsers(val))
    }, []);
    return (
        <div>
            {users.map((user) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};