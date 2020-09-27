import React, { ReactElement } from 'react'
import { User } from '../App'

interface Props {
    initialUser: User;
}

export default function Welcome({initialUser}: Props): ReactElement {
    return (
        <div>
           Welcome {initialUser['name']}, your email is {initialUser['email']} 
        </div>
    )
}
