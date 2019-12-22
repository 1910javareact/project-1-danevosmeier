import React, { SyntheticEvent } from 'react'
import { User } from '../../models/user'
import { FormGroup, Label, Input, Form, Button } from 'reactstrap'

interface IUserByIdComponentProps {
    user: User
    fUserById: (userId: number) => void
}

export class UserByIdComponent extends React.Component<IUserByIdComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            userId: 0
        }
    }
    updateId = (e: any) => {
        this.setState({
            ...this.state,
            userId: e.target.value
        })
    }
    submitUserId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.fUserById(this.state.userId)
    }

    render() {
        return (
            <div>
                <p>UserID: {this.props.user.userId}</p>
                <p>Username: {this.props.user.username}</p>
                <p>First name: {this.props.user.firstName}</p>
                <p>Last name: {this.props.user.lastName}</p>
                <p>Email: {this.props.user.email}</p>

                <Form onSubmit={this.submitUserId} className='{classes.form}' noValidate>
                    <FormGroup>
                        <Label for="userId">User ID</Label>
                        <Input type="text" name="userId" id="userId" value={this.state.userId} onChange={this.updateId} autoFocus />
                    </FormGroup>
                    <Button type="submit"  variant="contained" color="primary" className='{classes.submit}'>
                        Get User
                    </Button>
                </Form>
            </div>
        )
    }
}