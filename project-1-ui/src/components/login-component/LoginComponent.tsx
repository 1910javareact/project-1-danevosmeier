import React, { SyntheticEvent } from 'react'
import { User } from '../../models/user'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './../component.css'

interface ILoginComponentProps {
    user: User
    fLogin: (u: string, p: string) => void
}

export class LoginComponent extends React.Component<ILoginComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
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
    submitLogin = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.fLogin(this.state.username, this.state.password)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitLogin}>
                    <FormGroup>
                        <Label for="exampleUsername">Username</Label>
                        <Input value={this.state.username} onChange={this.updateUsername} type="text" name="username" id="exampleUsername" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input value={this.state.password} onChange={this.updatePassword} type="password" name="password" id="examplePassword" />
                    </FormGroup>
                    <Button color='info'>Submit</Button>
                </Form>
                {this.props.user.username}
            </div>
        )
    }
}