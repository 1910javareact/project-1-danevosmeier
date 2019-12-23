import React, { SyntheticEvent } from 'react'
import { updateUser } from '../../remote/frankenstein-clients/f-user'
import { Form, Button, FormGroup, Label, Input } from 'reactstrap'
import './../component.css'

export class UpdateUserComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            userId: 0,
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
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

    submitUpdate = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let u = await updateUser(this.state.userId, this.state.username, this.state.password, this.state.firstname, this.state.lastname, this.state.email)
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                })
            } else {
                this.setState({
                    ...this.state,
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                <h2>Update User</h2>
                <br/>
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
                    <br />
                    <Button color="info" type="submit"  variant="contained" >
                        Update
                    </Button>
                </Form>
                <br />
            </div>
        )
    }
}
