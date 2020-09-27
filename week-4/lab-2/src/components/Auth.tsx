import React, { ReactElement, useState } from 'react'
import { User } from '../App';

interface Props {
    initialUsers: User[];
    activeUserChange: (newUser: User) => void;
    activeChange: (newActive: string) => void;
}

export default function Auth({initialUsers, activeChange, activeUserChange}: Props): ReactElement {

    const handleActive = (newActive: string) => {
        activeChange(newActive);
    }

    const handleActiveUser = (newUser: User) => {
        activeUserChange(newUser);
    }

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const users = initialUsers;



    const handleSumbit = () => {
        const newUser = {
            email: email,
            password: password
        }
        users.forEach(tempUser => {
            if(tempUser['email'] === newUser['email'] && tempUser['password'] === newUser['password'] ) {
                console.log('founded');
                handleActiveUser(tempUser);
                handleActive('welcome');
            }
        })
        console.log(newUser, 'newUser');
    }
    return (
        <div>
            <div className="form">
                <h2 className="form__title">Login form</h2>
                <div className="input-box">
                    <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="wrapper-btn">
                    <button value="Submit" className="btn btn-submit" onClick={handleSumbit}>Submit</button>
                    <button className="btn btn-cancel" onClick={() => handleActive('welcome')}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
