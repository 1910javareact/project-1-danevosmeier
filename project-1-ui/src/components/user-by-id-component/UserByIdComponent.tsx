import { RouteComponentProps } from "react-router";
import { User } from "../../models/user";
import { SyntheticEvent } from "react";
import React from 'react'
import { Form, FormGroup, Label, Input, Button, Table } from "reactstrap";


interface IUserByIdDisplayProps extends RouteComponentProps {
    user: User
    userId: (id: number) => void
}

export class UserByIdDisplayComponent extends React.Component<IUserByIdDisplayProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            id: undefined
        }
    }

    updateId = (e: any) => {
        this.setState({
            ...this.state,
            id: e.target.value
        })
    }

    submitId = async (e: SyntheticEvent) => {
        e.preventDefault()

        this.props.userId(this.state.id)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitId}>
                    <FormGroup>
                        <Label for="exampleID">ID</Label>
                        <Input value={this.state.id} onChange={this.updateId} type="number" name="ID" id="exampleID" placeholder="with a placeholder" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                <Table bordered>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Username</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        <td>{this.props.user.userId}</td>
                        <td>{this.props.user.username}</td>
                        <td>{this.props.user.firstName}</td>
                        <td>{this.props.user.lastName}</td>
                        <td>{this.props.user.email}</td>
                    </tbody>
                </Table>
            </div>
        )
    }
}