import { User } from "../../../models/user"
import React from 'react'



interface IUsersDisplayRowProps{
    user: User
}

export const UserDisplayRowComponent: React.FC<IUsersDisplayRowProps> = (props) => {
    return (
        <tr>
            <td>{props.user.userId}</td>
            <td>{props.user.username}</td>
            <td>{props.user.firstName}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.email}</td>
            {/* <td>{props.user.roles}</td> */}
        </tr>
    )
}
