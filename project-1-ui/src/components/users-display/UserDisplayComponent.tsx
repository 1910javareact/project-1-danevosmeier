import React, { SyntheticEvent } from "react"
import { User } from "../../models/user";
import { getAllUsers, getUserById } from '../../remote/frankenstein-client/frankenstein-user'
import { UsersDiplayRowComponent } from "./user-display-row/UsersDisplayRowComponents";
import { Table, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Role } from "../../models/role";

interface IUsersDisplayProps {
    user: User
    fUpdate: (id: any, username: any, firstName: any, lastName: any, email: any) => void
}

interface IUsersDisplayState {
    allUsers: User[]
    userById: User
    id: any
    username: any
    firstName: any
    lastName: any
    email: any
    successful: string
}

export class UsersDisplayComponent extends React.Component<IUsersDisplayProps, IUsersDisplayState>{
    constructor(props: any) {
        super(props)
        this.state = {
            allUsers: [],
            userById: new User(0, '', '', '', '', '', new Role(0, '')),
            id: '',
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            successful: ''
        }
    }

    async componentDidMount() {
        try {
            let u = await getUserById(this.props.user.userId)
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                    userById: u.body[0]
                })
            }
        }
        catch (e) {
            console.log(e);

        }
    }

    getAllUsersMethod = async () => {
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

    updateUserId = (e: any) => {
        this.setState({
            ...this.state,
            id: e.target.value
        })
    }

    updateUserName = (e: any) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }

    updateUserFirstName = (e: any) => {
        this.setState({
            ...this.state,
            firstName: e.target.value
        })
    }

    updateUserLastName = (e: any) => {
        this.setState({
            ...this.state,
            lastName: e.target.value
        })
    }

    updateUserEmail = (e:any) =>{
        this.setState({
            ...this.state,
            email: e.target.value
        })
    }

    updateUser = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.fUpdate(this.state.id, this.state.username, this.state.firstName, this.state.lastName, this.state.email)
    }

    render() {
        let rows = this.state.allUsers.map((e) => {
            return <UsersDiplayRowComponent user={e} key={'user ' + e.userId} />
        })
        return (
            <div>
                <p>Welcome back {this.state.userById.username}</p>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>

                <Button onClick={this.getAllUsersMethod}>Click to view all users</Button>

                <Form onSubmit={this.updateUser}>
                    <FormGroup>
                        <Label for="userId">Update User</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="userId">User Id to be updated</Label>
                        <Input
                            type="text"
                            id="userId"
                            value={this.state.id}
                            onChange={this.updateUserId}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userName">Please enter username</Label>
                        <Input
                            type="text"
                            id="userName"
                            value={this.state.username}
                            onChange={this.updateUserName}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="firstName">Please enter first name</Label>
                        <Input
                            type="text"
                            id="firstName"
                            value={this.state.firstName}
                            onChange={this.updateUserFirstName}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Please enter last name</Label>
                        <Input
                            type="text"
                            id="lastName"
                            value={this.state.lastName}
                            onChange={this.updateUserLastName}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Please enter email</Label>
                        <Input
                            type="text"
                            id="email"
                            value={this.state.email}
                            onChange={this.updateUserEmail}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button>Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}