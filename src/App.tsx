import React from 'react';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { User } from './components/User';
import { StyleLogin } from './style/login-style';

function App() {
  return (
    <StyleLogin>
      <div className='form-content'>
        <Login/>
        <User/>
        <Logout/>
      </div>
    </StyleLogin>
  );
}

export default App;
