import React, {useEffect, useState} from 'react';
import Post from "./Post/Post";
import './Post/Post.css';
/*з jsonplaceholder отримати всі пости в компоненту Posts.js
відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)*/

/*є API от SpaceX
https://api.spacexdata.com/v3/launches/
потрібно вивести всі запуски кораблів окрім 2020 року
репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
"mission_name" "launch_year" "mission_patch_small"*/

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => setPosts(posts))
            .catch((err) => console.log(err))
            .finally(()=> console.log('promise finished'))
    }, []);

    const showClick = (e) => {
        // Знайти всі наступні елементи з класами hidden або additional, починаючи від кнопки
        const parent = e.target.closest('div'); // Найближчий батьківський елемент (контейнер поста)
        const additionalElements = parent.querySelectorAll('.hidden, .additional');

        additionalElements.forEach((element) => {
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden');
                element.classList.add('additional');
            } else {
                element.classList.remove('additional');
                element.classList.add('hidden');
            }
        });
    }

    return (
        <div>
            {posts?.map((post) => {
                return (
                    <Post
                        key={post.id}
                        post={post}
                        showClick={showClick}
                    />)
                })}
        </div>
    );
};



export default Posts;