import React from 'react'
import { User } from '../../../models/user';

interface IUsersDisplayRowProps {
    user: User
}

export const UsersDiplayRowComponent: React.FC<IUsersDisplayRowProps> = (props) => {
    return (
        <tr>
            <td>{props.user.username}</td>
            <td>{props.user.firstName}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.email}</td>
        </tr>
    )
}