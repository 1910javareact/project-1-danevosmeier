import React, { SyntheticEvent } from 'react'

import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { User } from '../../models/user'

interface ILoginComponentProps {
    user: User
    fLogin: (u: string, p: string) => void
}

export class FLoginComponent extends React.Component<ILoginComponentProps, any>{
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
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="lblUsername">Username</Label>
                        <Input value={this.state.username} onChange={this.updateUsername} type="text" name="username" id="txtUsername" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="lblPassword">Password</Label>
                        <Input value={this.state.password} onChange={this.updatePassword} type="password" name="password" id="txtPassword" />
                    </FormGroup>
                    <Button color='primary'>Submit</Button>
                </Form>
                <p>{this.props.user.username}</p>
            </div>
        )
    }
}