import React from 'react'
import { User } from '../../models/user';

interface IUserComponentProps {
    user: User
}

export class UserComponent extends React.Component<IUserComponentProps, any>{

    render() {
        return (
            <div>
                <p>UserID: {this.props.user.userId}</p>
                <p>Username: {this.props.user.username}</p>
                <p>First name: {this.props.user.firstName}</p>
                <p>Last name: {this.props.user.lastName}</p>
                <p>Email: {this.props.user.email}</p>
                <p>Role : {this.props.user.role.role}</p>
            </div>
        )
    }
}