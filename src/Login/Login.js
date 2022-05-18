import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import './Login.css'

const Login = () => {
  const Navigate = useNavigate()

  const [email, setemail] = useState([])
  const [password, setpassword] = useState([])

  const [
    signInWithEmailAndPassword,
    user,

    error,
  ] = useSignInWithEmailAndPassword(auth)

  const [signInWithGoogle, user1] = useSignInWithGoogle(auth)

  const emailhendle = (event) => {
    setemail(event.target.value)
  }
  const passwordhendle = (event) => {
    setpassword(event.target.value)
  }
  const login = (event) => {
    event.preventDefault()
    signInWithEmailAndPassword(email, password)
  }

  if (user || user1) {
    Navigate('/add')
  }

  return (
    <div className="login-main-div py-5 px-2">
      <div className=" container  form-custom-css">
        <Form onSubmit={login} className="form-input-css">
          <h3>Login</h3>
          <div className="input-css">
            <span className="d-flex align-items-center  justify-content ">
              <FontAwesomeIcon className="mt-4 me-2" icon={faEnvelope} />
              <input
                onBlur={emailhendle}
                type="email"
                placeholder=" Your Email"
              />
            </span>

            <span className="d-flex align-items-center  justify-content ">
              <FontAwesomeIcon className="mt-4 me-2" icon={faLock} />
              <input
                onBlur={passwordhendle}
                type="password"
                placeholder=" Your Password"
                required
              />
            </span>
          </div>

          {error ? <p className="text-danger">Not found</p> : ''}

          <br />
          <br />
          <input className="submit-css" type="submit" value="Login" />
        </Form>
        <p>
          New To To-DoApp ?{' '}
          <Link className="link-css" to="/signup">
            Sign Up Now{' '}
          </Link>
        </p>
        OR
        <br />
        <button onClick={() => signInWithGoogle()} className="google-css mb-4">
          Sing in With Google
        </button>
      </div>
    </div>
  )
}

export default Login
