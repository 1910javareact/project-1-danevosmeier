import React from 'react'
import { Table } from 'reactstrap'
import { RouteComponentProps, Redirect } from 'react-router'
import { User } from '../../models/user'
import { UserDisplayRowComponent } from './user-display-row/UserDisplayRowComponent'
import { getAllUsers } from '../../remote/reimbursements-clients/reimbursements-user'


interface IUserDisplayProps extends RouteComponentProps {
    user: User
}

interface IUsersDisplayState {
    allUsers: User[]
}

export class UsersDisplayComponent extends React.Component<any, IUsersDisplayState>{

    constructor(props: any) {
        super(props)
        this.state = {
            allUsers: []
        }
    }

    async componentDidMount() {
        try {
            let u = await getAllUsers()
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                    allUsers: u.body
                })
            }
        } catch (e) {
            console.log(e);

        }
    }

    render() {
        let rows = this.state.allUsers.map((e) => {
            return <UserDisplayRowComponent user={e} key={'user' + e.userId} />
        })
        return (
            <div>
                <Table bordered color='danger'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Username</td>
                            <td>FirstName</td>
                            <td>LastName</td>
                            <td>Email</td>
                            <td>Roles</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </div>
        )
    }
}