import React, { useEffect, useState } from 'react';
import './Home.css';
import SingleUser from '../SingleUser/SingleUser';


const Home = () => {
    const [ user , setUser] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div>
            <h2>this is home:{user.length}</h2>
            <div className='home-style'>
                {
                    user.map(use=><SingleUser use={use}></SingleUser>)
                }
            </div>
        </div>
    );
};

export default Home;