import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css';

const SignUp = () => {
  const [error, setError] = useState(null);
  const {createUser} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password.length < 6) {
      setError('Password should be at least 6 characters long');
      return;
    }
    if (password !== confirmPassword) {
      setError('Your password did not match');
      return;
    }
    createUser(email, password)
    .then(result => {
      console.log(result.user);
      form.reset();
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='form-container'>
      <h2 className="form-title">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email' required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' name='password' required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id='confirmPassword' name='confirmPassword' required />
        </div>
        {error && <p className='text-error'>{error}</p>}
        <input className='submit-btn' type="submit" value="Login" />
      </form>
      <p>Already have an account? <Link to='/login'>Login here</Link></p>
    </div>
  );
}

export default SignUp;
