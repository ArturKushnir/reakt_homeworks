import React from 'react';
import {Address} from "./address/Address";
import {Company} from "./company/Company";
import {Details} from "./details/Details";

const User = ({user}) => {
    const {id, name, username, email, address, company} = user;
    return (
        <div>
            <Details data={{id, name, username, email}}/>
            <Address address={address}/>
            <Company company={company}/>
        </div>
    );
};

export default User;