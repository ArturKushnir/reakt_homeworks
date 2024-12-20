import React, {useEffect, useState} from 'react';
import UserComponent from "./userComponent/userComponent";

const UserContainer = ({setUserId}) => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => setUsers(users))
            .catch((err) => console.log(err))
    }, []);

    return (
        <div>
            {users.map((user) => <UserComponent key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};

export {UserContainer};