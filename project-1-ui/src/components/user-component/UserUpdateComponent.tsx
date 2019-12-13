import React from 'react'
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap'

export class UserUpdateComponent extends React.Component<any, any>{
    

    render() {
        return (
            <div>
                <Form>
                <FormGroup row>
                        <Label id='lblUserSelect' for="userSelect" sm={2}>Select User</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="txtUserSelect" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label id='lblEmail' for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="txtEmail" placeholder="you@here.com" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </Col>
                    </FormGroup>
                    
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 1 }}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}