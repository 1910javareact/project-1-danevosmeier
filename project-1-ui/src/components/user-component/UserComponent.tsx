import React from 'react'
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap'
import { fLogin } from '../../remote/frankenstein-client/FrankensteinClientUser'

export class UserComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            user: {}
        }
    }

    async componentDidMount() {
        let user = await fLogin('inga', 'password')
        this.setState({
            ...this.state,
            user
        })
    }

    render() {
        return (
            <div>
                <Form>
                <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Select</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </Col>
                    </FormGroup>
                    
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}