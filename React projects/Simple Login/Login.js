
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Logging in with: ', username, password);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Login</h2>
      <form style={{ width: '300px', margin: '0 auto' }} onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />

        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />

        <input type="submit" value="Login" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', cursor: 'pointer' }} />
      </form>
      <p>Not registered yet? <a href="#">Create an account</a></p>
    </div>
  );
};

export default Login;
