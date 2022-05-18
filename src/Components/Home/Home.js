import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
    return (
        <div className='text-center'>
            <h1 className='mt-5'>Welcome To My TO-DO APP</h1>

         <Link to='/add'>   <button className='btn custom-btn'>Add Task</button></Link>

            
            
        </div>
    );
};

export default Home;