import React from 'react';

export const Details = ({data}) => {
    const {id, name, username, email} = data;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
        </div>
    );
};

