import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import './task.css'

const MyTask = () => {
  const [Task, setTask] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => setTask(data))
  }, [])

  const taskdelete = (id) => {
    Swal.fire({
      title: 'Are you sure to Delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            const remain = Task.filter((task) => task._id !== id)
            setTask(remain)
          })

        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
      }
    })
  }

  return (
    <div className="text-center my-5">
      <h1> Task</h1>
      {Task.map((task) => (
        <div className="text-center">
          <div className="info-css">
            <div className="m-5 divs">
              <h4>Name : {task.name}</h4>
              <h6>{task.about}</h6>
            </div>
            <button
              onClick={() => taskdelete(task._id)}
              className="btn delete-css"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyTask
