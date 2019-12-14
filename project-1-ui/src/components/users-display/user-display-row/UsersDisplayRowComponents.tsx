import React from 'react'
import { User } from '../../../models/user';

interface IUsersDisplayRowProps{
    user:User
}

export const UsersDiplayRowComponent: React.FC<IUsersDisplayRowProps> = (props) =>{
    return(
        <tr>
            <td>{props.user.userId}</td>
        </tr>
    )
}