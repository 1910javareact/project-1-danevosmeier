import React, { SyntheticEvent } from 'react'
import { fLogin } from '../remote/frankenstein-client/FrankensteinClientUser'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export class FLoginComponent extends React.Component<any, any>{
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
        let user = await fLogin(this.state.username, this.state.password)
        this.setState({
            ...this.state,
            user
        })
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
                        <Label for="examplePassword">Password</Label>
                        <Input value={this.state.password} onChange={this.updatePassword} type="password" name="password" id="lblPassword" />
                    </FormGroup>
                    <Button color='primary'>Submit</Button>
                </Form>
            </div>
        )
    }
}