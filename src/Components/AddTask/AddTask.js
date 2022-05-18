import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './add.css'

const AddTask = () => {
  const navigat = useNavigate()

  const formSubmit = (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const about = event.target.descrip.value

    const url = `https://todoserveronline.herokuapp.com/users`
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name, about }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        event.target.reset()
        Swal.fire('Your Task Added ')
        navigat('/my')
      })
  }
  return (
    <div className="text-center">
      <div className="custom-form">
        <h3>Add New Task</h3>
        <br />
        <form onSubmit={formSubmit} className="">
          <input
            className="input-css"
            required
            name="name"
            placeholder="Name"
            type="text"
          />
          <br />
          <br />
          <input
            className="input-css"
            required
            name="descrip"
            placeholder="description"
            type="text"
          />
          <br />
          <br />
          <input className="btn new-submit " type="submit" value="complete" />
        </form>
      </div>
    </div>
  )
}

export default AddTask
