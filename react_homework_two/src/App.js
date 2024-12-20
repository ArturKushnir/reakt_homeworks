import React from 'react';
import Posts from "./components/Posts/Posts";
import Launches from "./components/Launches/Launches";

/*з jsonplaceholder отримати всі пости в компоненту Posts.js
відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)*/

const App = () => {
    return (
        <div>
            <h1>Posts</h1>
            <Posts/>

            <h1>Launches</h1>
            <Launches/>
        </div>
    );
};

export default App;