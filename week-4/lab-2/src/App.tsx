import React, { useState } from 'react';
import './App.css';
import Auth from './components/Auth';
import Registration from './components/Registration';
import Welcome from './components/Welcome';

export interface User {
  name: string;
  email: string;
  password: string;
}

const initialUsers: User[] = [];

function App() {


  function MyTemplate(active:string) {
    switch (active) {
      case 'registration':
        return (<Registration onChange={handleChange} activeChange={handleActive}/>);
      case 'auth':
        return (<Auth initialUsers={users} activeUserChange={handleActiveUser} activeChange={handleActive}/>);
      case 'welcome':
        return (<Welcome initialUser={activeUser}/>);
      default:
        return (<div>Click one of the buttons</div>);
    }
  }

  const handleChange = (user: User) => {
    setUsers([...users, user]);
  }
  const handleActive = (newActive: string) => {
    setActive(newActive);
  }

  const handleActiveUser = (newUser: User) => {
    setActiveUser(newUser);
  }

  const [users, setUsers] = useState(initialUsers);
  const [active, setActive] = useState('');
  const [activeUser, setActiveUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  return (
    <div className="App">
      <button className="btn" onClick={() => {setActive('auth')}}>Login</button>
      <button className="btn"  onClick={() => {setActive('registration')}}>Sign Up</button>
      {MyTemplate(active)}
      <br></br>
      Users in database:
      {users.map((user, index) => (
                      <li className="list__item" key={index}>
                          <div>{ user.name }</div>
                          <div>{ user.email }</div>
                          <div>{ user.password }</div>
                      </li>
                  ))}
    </div>
  );
}

export default App;
