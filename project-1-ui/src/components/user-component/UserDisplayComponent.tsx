import React from 'react'
import { Form, FormGroup, Label, Input, Col, Table } from 'reactstrap'

export class UserDisplayComponent extends React.Component<any, any>{


    render() {
        return (
            <>
                <Form>
                    <FormGroup row>
                        <Label id='lblUserSelect' for="userSelect" sm={2}>Select User</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="txtUserSelect" />
                        </Col>
                    </FormGroup>
                </Form>

                <Table hover>
                    <thead>
                        <tr>
                            <th>ID#</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}