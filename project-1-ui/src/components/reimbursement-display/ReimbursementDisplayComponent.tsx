import React, { SyntheticEvent } from 'react'
import { User } from "../../models/user";
import { Reimbursement } from "../../models/reimbursement";
import { Role } from '../../models/role';
import { getUserById } from '../../remote/frankenstein-client/frankenstein-user';
import { Form, FormGroup, Label, Input, Button, Table } from 'reactstrap';
import { ReimbursementDisplayRow } from './reimbursement-display-row/ReimbursementDisplayRow';



interface IReimbursementDisplayProps {
    user: User
    reimbursement: Reimbursement
    rUpdate: (id: number, author: number, amount: number, dateSubmitted: number, dateResolved: number, description: string, resolver: number, status: number, type: number) => void
    reimbursementFindByStatus: (status: number) => void
}

interface IReimbursementDisplayState {
    userById: User
    allReimbursements: any
    id: any
    author: any
    amount: any
    dateSubmitted: any
    dateResolved: any
    description: any
    resolver: any
    status: any
    type: any
    successful: string
}

export class ReimbursementDisplay extends React.Component<IReimbursementDisplayProps, IReimbursementDisplayState>{
    constructor(props: any) {
        super(props)
        this.state = {
            userById: new User(0, '', '', '', '', '', new Role(0, '')),
            allReimbursements: [],
            id: '',
            author: '',
            amount: '',
            dateSubmitted: '',
            dateResolved: '',
            description: '',
            resolver: '',
            status: '',
            type: '',
            successful: '',
        }
    }

    async componentDidMount() {
        try {
            let u = await getUserById(this.props.user.userId)
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                    userById: u.body[0]
                })
            }
        }
        catch (e) {
            console.log(e);

        }
    }

    updateId = (e: any) => {
        this.setState({
            ...this.state,
            id: e.target.value
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
            status: e.target.value
        })
    }

    updateType = (e: any) => {
        this.setState({
            ...this.state,
            type: e.target.value
        })
    }

    postReimbursement = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.rUpdate(this.state.id, this.state.userById.userId, this.state.amount, this.state.dateSubmitted, this.state.dateResolved, this.state.description, this.state.resolver, this.state.status, this.state.type)
    }

    findReimbursementByStatus = async (e: any) => {
        let rStatus;
        e.preventDefault();
        if (e.target.value === 'PENDING') {
            rStatus = this.props.reimbursementFindByStatus(1)
        }
        if (e.target.value === 'APPROVED') {
            rStatus = this.props.reimbursementFindByStatus(2)
        }
        if (e.target.value === 'DENIED') {
            rStatus = this.props.reimbursementFindByStatus(3)
        }
    }

    render() {
        let rows = this.state.allReimbursements.map((e: any) => {
            return <ReimbursementDisplayRow reimbursement={e} key={'Reimbursement' + e.reimbursement_id} />
        })
        return (
            <div>
                <p>Welcome back {this.state.userById.username}</p>
                <Form onSubmit={this.postReimbursement}>
                    <FormGroup>
                        <Label for="author">Make a new reimbursement</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="author">Enter you userId</Label>
                        <Input type="text" id="author" value={this.state.author} onChange={this.updateAuthor}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="amount">Enter the amount of the Reimbursement</Label>
                        <Input type="text" id="amount" value={this.state.amount} onChange={this.updateAmount}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="dateSubmitted">Enter today's date</Label>
                        <Input type="text" id="dateSubmitted" value={this.state.dateSubmitted} onChange={this.updateDateSubmitted}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="dateResolved">Enter the date it paid</Label>
                        <Input type="text" id="author" value={this.state.dateResolved} onChange={this.updateDateResolved}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Please describe your expense</Label>
                        <Input type="text" id="discription" value={this.state.description} onChange={this.updateDescription}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="type">Please enter the type of reimbursement</Label>
                        <Input type="text" id="type" value={this.state.type} onChange={this.updateType}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="status">Please enter the status of the reimbursement</Label>
                        <Input type="text" id="status" value={this.state.status} onChange={this.updateStatus}></Input>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>

                <Table>
                    <thead>
                        <tr>
                            <td>Author</td>
                            <td>Amount</td>
                            <td>Date Submitted</td>
                            <td>Date Resolved</td>
                            <td>Description</td>
                            <td>Resolver</td>
                            <td>Status</td>
                            <td>Type</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </div>
        )
    }
}