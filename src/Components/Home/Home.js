import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
    return (
        <div className='text-center'>

         <Link to='/add'>   <button className='btn custom-btn'>Add Task</button></Link>

            
            
        </div>
    );
};

export default Home;