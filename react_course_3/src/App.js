import React, {useEffect, useState} from 'react';
import Users from "./components/users/Users";
import {UserContainer} from "./components/userContainer/UserContainer";
import Posts from "./components/posts/Posts";

const App = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => setUsers(users))
            .catch((err) => console.log(err))
            .finally(()=> console.log('promise finished'))
    }, []);

    const [userId, setUserId] = useState(null)

    return (
        <div>
            <Users users={users}/>
            <br/>
            <UserContainer setUserId={setUserId}/>
            <br/>
            {userId && <Posts userId={userId}/>}

        </div>
    );
};

export default App;