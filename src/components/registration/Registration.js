import React, { useState, useEffect } from 'react';
import './styles.scss';

function Registration(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit;

  const handleChange = e => {
    if (e.currentTarget.name === 'email') {
      setEmail(e.currentTarget.value);
    } else {
      setPassword(e.currentTarget.value);
    }
  }

  return (
    <div>
      <form>
        <input
          value={email}
          name='email'
          onChange={handleChange}
          type='email'
          placeholder='Email'
        />

        <input
          value={password}
          name='password'
          onChange={handleChange}
          type='password'
          placeholder='Password'
        />

        <input
          type='radio'
          id="mentor"
          name="userType"
        />

        <label for="mentor">Mentor</label>

        <input
          type='radio'
          id="mentee"
          name="userType"
        />

        <label for="mentee">Mentee</label>

        <button type='submit'>Register</button>

      </form>
    </div>
  );
}

export default Registration;