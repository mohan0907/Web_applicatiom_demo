import React, { useState } from 'react';
import './App.css';

function App() {
  const initialValue = {
    email: '',
    password: ''
  };
  const [userInfo, setUserInfo] = useState(initialValue);
  const handleChange = (e) => {
    const { name,value } =e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  // const handleSubmit = (value) => {

  // }
  return (
    <div className="App">
      <form>
        <div>
          <label>Email:</label>
        </div>
        <div>
          <input
            type='email'
            name='email'
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
        </div>
        <div>
          <input type='password'
            name='password'
            value={userInfo.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button >Login</button> <button>Logout</button>
        </div>
        <div>
          
        </div>
      </form>
    </div>
  );
}

export default App;
