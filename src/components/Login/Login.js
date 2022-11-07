import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
  const {logIn} = useContext(AuthContext);
  
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
    .then(result => {
      // console.log(result.user);
      // form.reset();
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='form-container'>
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email' required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' name='password' required />
        </div>
        <input className='submit-btn' type="submit" value="Login" />
      </form>
      <p>Don't have an account? <Link to='/signup'>Create a new account</Link></p>
    </div>
  );
}

export default Login;
