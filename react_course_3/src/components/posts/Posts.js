import React, {useEffect, useState} from 'react';
import Post from "./post/Post";


const Posts = ({userId}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then((val) => val.json())
            .then((post) => setPosts(post))
    }, [posts]);

    return (
        <div>
            {Array.isArray(posts) && posts.length > 0 ? (
                posts.map((post) => <Post key={post.id} post={post} />)
            ) : (
                <div>No posts available</div>
            )}
        </div>
    );
};

export default Posts;