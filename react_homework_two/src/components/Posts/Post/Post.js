import React from 'react';
import './Post.css';
/*з jsonplaceholder отримати всі пости в компоненту Posts.js
відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)*/

/*є API от SpaceX
https://api.spacexdata.com/v3/launches/
потрібно вивести всі запуски кораблів окрім 2020 року
репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
"mission_name" "launch_year" "mission_patch_small"*/

const Post = ({post, showClick}) => {
    const {id, title, userId, body} = post;

    return (
        <div>
            <ul>
                <li>{`Id: ${id}`}</li>
                <li>{`Title: ${title}`}</li>
                <li className={'hidden'}>{`User id: ${userId}`}</li>
                <li className={'hidden'}>{`Body: ${body}`}</li>
            </ul>
            <button onClick={showClick}>Toggle Details</button>
        </div>
    );
};

export default Post;