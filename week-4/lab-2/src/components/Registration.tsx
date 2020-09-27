import React, { ReactElement, useState } from 'react'
import { User } from '../App'

interface Props {
    onChange: (user: User) => void;
    activeChange: (newActive: string) => void;
}

export default function Registration(props: Props): ReactElement {

    const handleChange = (user: User) => {
        props.onChange(user);
    }

    const handleActive = (newActive: string) => {
        props.activeChange(newActive);
    }

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSumbit = () => {
        const newUser = {
            name: name,
            email: email,
            password: password
        }
        console.log(newUser, 'newUser');
        handleChange(newUser);
        handleActive('auth');
    }
    return (
        <div>
            <div className="form">
                <h2 className="form__title">Registration form</h2>
                <div className="input-box">
                    <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="wrapper-btn">
                    <button value="Submit" className="btn btn-submit" onClick={handleSumbit}>Submit</button>
                    <button className="btn btn-cancel" onClick={() => handleActive('')}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
