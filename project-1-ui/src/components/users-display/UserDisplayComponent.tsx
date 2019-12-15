import React from "react"
import { Redirect } from "react-router";
import { User } from "../../models/user";
import { getAllUsers } from '../../remote/frankenstein-client/frankenstein-user'
import { UsersDiplayRowComponent } from "./user-display-row/UsersDisplayRowComponents";
import { Table } from "reactstrap";


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
            console.log(e);

        }
    }

    render() {
        let rows = this.state.allUsers.map((e) => {
            return <UsersDiplayRowComponent user={e} key={'user ' + e.userId} />
        })
        return (
            this.props.user.userId ?
                <div>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Roles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </div>
                :
                <Redirect to='/login'/>
        )
    }
}