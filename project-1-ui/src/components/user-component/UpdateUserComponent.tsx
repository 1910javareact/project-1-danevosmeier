import React, { SyntheticEvent } from 'react'
import { updateUser } from '../../remote/frankenstein-clients/f-user'
import { Role } from '../../models/role'
import { Form, Button, FormGroup, Label, Input } from 'reactstrap'

export class UpdateUserComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            updated: false,
            userId: 0,
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            role: new Role(3, 'User')
        }
    }
    updateUserId = (e: any) => {
        this.setState({
            ...this.state,
            userId: e.target.value
        })
    }
    updateUsername = (e: any) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }
    updatePassword = (e: any) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }
    updateFirstname = (e: any) => {
        this.setState({
            ...this.state,
            firstname: e.target.value
        })
    }
    updateLastname = (e: any) => {
        this.setState({
            ...this.state,
            lastname: e.target.value
        })
    }
    updateEmail = (e: any) => {
        this.setState({
            ...this.state,
            email: e.target.value
        })
    }
    updateRole = (e: any) => {
        this.setState({
            ...this.state,
            role: new Role(e.target.value, '')
        })
    }
    submitUpdate = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let u = await updateUser(this.state.userId, this.state.username, this.state.password, this.state.firstname, this.state.lastname, this.state.email, this.state.role)
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                    updated: true
                })
            } else {
                this.setState({
                    ...this.state,
                    updated: false
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let updateMessage = () => {
            if (this.state.updated) {
                return <p>User Updated</p>
            }
        }
        return (
            <div>
                <Form onSubmit={this.submitUpdate} className="updateComponent">
                    <FormGroup>
                        <Label for="userId">User ID</Label>
                        <Input type="text" name="userId" id="userId" value={this.state.userId} onChange={this.updateUserId} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">User Name</Label>
                        <Input type="text" name="username" id="username" value={this.state.username} onChange={this.updateUsername} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="text" name="password" id="password" value={this.state.password} onChange={this.updatePassword} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input type="text" name="firstName" id="firstName" value={this.state.firstname} onChange={this.updateFirstname} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lastName" id="lastName" value={this.state.lastname} onChange={this.updateLastname} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" value={this.state.email} onChange={this.updateEmail} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="role">Roles</Label>
                        <Input type="text" name="role" id="role" value={this.state.role.roleId} onChange={this.updateRole} />
                    </FormGroup>
                    <br />
                    <Button type="submit"  variant="contained" color="primary" className='{classes.submit}' >
                        Update
                    </Button>
                </Form>
                <br />
                {updateMessage()}
            </div>
        )
    }
}
