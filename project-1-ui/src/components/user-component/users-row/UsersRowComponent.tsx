import React from 'react'
import { User } from '../../../models/user';

interface IUsersRowProps {
    user: User
}

export const UsersRowComponent: React.FC<IUsersRowProps> = (props) => {
    return (
        <tr>
            <td>{props.user.userId}</td>
            <td>{props.user.username}</td>
            <td>{props.user.firstName}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.email}</td>
        </tr>
    )
}