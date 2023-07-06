import React, { useState  } from "react";
import './style.css';
import{Link,BrowserRouter} from "react-router-dom";
const MainPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password
    };
    console.log(data);
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <BrowserRouter>
         <Link to= '/ProductPage/'>
       <a href="/ProductPage"><button type="submit" className='btn btn-primary'>ProductPage</button></a>
         </Link>
        </BrowserRouter>
      </form>
    </div>
  );
};
export default MainPage;









