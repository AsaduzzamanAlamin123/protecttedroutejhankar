import React from 'react';

const SingleUser = ({use}) => {
    console.log(use);
    const {name , userName} = use;
    return (
        <div>
            
            <card>
            <h2>{name}</h2>
            <h2>{userName}</h2>
            <button>detailes</button>
            </card>
        
        </div>
    );
};

export default SingleUser;