import React from "react"
import { RouteComponentProps, Redirect } from "react-router";
import { User } from "../../models/user";
import { getAllUsers } from '../../remote/frankenstein-client/frankenstein-user'
import { UsersDiplayRowComponent } from "./user-display-row/UsersDisplayRowComponents";
import { Table } from "reactstrap";


interface IUsersDisplayProps extends RouteComponentProps {
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
        }
        catch (e) {
            let rows = this.state.allUsers.map((e) => {
                return <UsersDiplayRowComponent user={e} key={'user ' + e.userId} />
            })
            return (
                this.props.user.userId ?
                    <div>
                        <Table border border-info>
                            <thead>
                                <tr>
                                    <td>Username</td>
                                    <td>First Name</td>
                                    <td>Last Name</td>
                                    <td>Email</td>
                                    <td>Roles</td>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </Table>
                    </div>
                :
                <Redirect to ='/login'/>
            )
        }
    }
}