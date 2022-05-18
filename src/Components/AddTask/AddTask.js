import React from 'react';
import './add.css'

const AddTask = () => {

    const formSubmit =event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const descrip=event.target.descrip.value;
        console.log(name ,descrip);


    }
    return (
        <div className='text-center'>
            <div className='custom-form'>
                <h3>Add New Task</h3>
                <br />
           <form onSubmit={formSubmit} className=''>
               <input className='input-css' name='name' placeholder='Name' type="text" />
               <br />
               <br />
               <input className='input-css' name='descrip' placeholder='description' type="text" />
               <br /><br />
               <input className='btn new-submit ' type="submit"  value='complete'/>
           </form>
           </div>
            
        </div>
    );
};

export default AddTask;