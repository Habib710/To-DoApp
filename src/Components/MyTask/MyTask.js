import React, { useEffect, useState } from 'react';
import './task.css';

const MyTask = () => {
    const [Task,setTask]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setTask(data))
    },[]);

    const taskdelete=id=>{
        
        const url=`http://localhost:5000/users/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            
          const remain= Task.filter(task=> task._id !== id)
          setTask(remain);
         
            
        });
        

    }

    return (
        <div className='text-center my-5'>
            <h1> Task</h1>
            {
                Task.map(task=>
                
                <div className='text-center'>
                <div className='info-css'>
                    <div  className='m-5 divs' >
                <h4>Name : {task.name}</h4>
                <h6>{task.about}</h6>
                </div>
                <button onClick={()=>taskdelete(task._id)} className='btn delete-css'>Delete</button>
    
                </div>
                
                
            </div>
            )
            }

         
            
        </div>
    );
};

export default MyTask;