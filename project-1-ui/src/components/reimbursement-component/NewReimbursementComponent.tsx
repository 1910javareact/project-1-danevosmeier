import React, { SyntheticEvent } from 'react'
import { fRemoteSubmitReimbursement } from '../../remote/frankenstein-clients/f-reimbursement'
import { Form, Button, FormGroup, Label, Input } from 'reactstrap'
import './../component.css'

export class NewReimbursementComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            reimbursementId: 0,
            author: 0,
            amount: 0,
            dateSubmitted: 0,
            dateResolved: 0,
            description: '',
            resolver: 0,
            status: 0,
            type: 0
        }
    }

    updateReimbursementId = (e: any) => {
        this.setState({
            ...this.state,
            reimbursementId: e.target.value
        })
    }

    updateAuthor = (e: any) => {
        this.setState({
            ...this.state,
            author: e.target.value
        })
    }

    updateAmount = (e: any) => {
        this.setState({
            ...this.state,
            amount: e.target.value
        })
    }

    updateDateSubmitted = (e: any) => {
        this.setState({
            ...this.state,
            dateSubmitted: e.target.value
        })
    }

    updateDateResolved = (e: any) => {
        this.setState({
            ...this.state,
            dateResolved: e.target.value
        })
    }

    updateDescription = (e: any) => {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }

    updateResolver = (e: any) => {
        this.setState({
            ...this.state,
            resolver: e.target.value
        })
    }

    updateStatus = (e: any) => {
        this.setState({
            ...this.state,
            amount: e.target.value
        })
    }

    updateType = (e: any) => {
        this.setState({
            ...this.state,
            type: e.target.value
        })
    }

    submitReimbursement = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let n = await fRemoteSubmitReimbursement(this.state.reimbursementId, this.state.author, this.state.amount, this.state.dateSubmitted, this.state.dateResolved, this.state.description, this.state.resolver, this.state.status, this.state.type)
            if (n.status === 201) {
                this.setState({
                    ...this.state,
                    sumbitted: 'Sumbitted successfully'
                })
            } else {
                this.setState({
                    ...this.state,
                    sumbitted: n.status
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                <h2>Make a new Reimbursement</h2>
                <br />
                <Form onSubmit={this.submitReimbursement} className="updateReimbursement">
                    <FormGroup>
                        <Label for="reimbursementId">Reimbursement ID</Label>
                        <Input type="text" name="reimbursementId" id="reimbursementId" onChange={this.updateReimbursementId} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="author">Author</Label>
                        <Input type="text" name="author" id="author" onChange={this.updateAuthor} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="amount">Amount</Label>
                        <Input type="text" name="amount" id="amount" onChange={this.updateAmount} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dateSubmitted">Date Submitted</Label>
                        <Input type="text" name="dateSubmitted" id="dateSubmitted" onChange={this.updateDateSubmitted} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dateResolved">Date Resolved</Label>
                        <Input type="text" name="dateResolved" id="dateResolved" onChange={this.updateDateResolved} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="text" name="description" id="description" onChange={this.updateDescription} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="resolver">Resolver</Label>
                        <Input type="text" name="resolver" id="resolver" onChange={this.updateResolver} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="status">Status</Label>
                        <Input type="text" name="status" id="status" onChange={this.updateStatus} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="type">Type</Label>
                        <Input type="text" name="type" id="type" onChange={this.updateType} />
                    </FormGroup>


                    <br />
                    <Button color="info" type="submit" > Submit </Button>
                </Form>
            </div>
        )
    }
}