import React, { SyntheticEvent } from 'react'
import { Reimbursement } from '../../models/reimbursement';
import { ReimbursementRowComponent } from './reimbursement-row/ReimbursementRowComponent';
import { FormGroup, Label, Input, Form, Button, Table } from 'reactstrap';

interface IReimbursementByUserIdComponentProps {
    reimbursement: Reimbursement[]
    fReimbursementInfo: (userId: number) => void
}

export class ReimbursementByUserIdComponent extends React.Component<IReimbursementByUserIdComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            userId: undefined
        }
    }
    updateUserId = (e: any) => {
        this.setState({
            ...this.state,
            userId: e.target.value
        })
    }
    submitUserId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.fReimbursementInfo(this.state.userId)
    }

    render() {
        let rows = this.props.reimbursement.map((e) => {
            return <ReimbursementRowComponent reimbursement={e} key={'reimbursement' + e.reimbursementId} />
        })
        return (
            <div>
                <Form onSubmit={this.submitUserId} className='{classes.form}' noValidate>

                    <FormGroup>
                        <Label for="userId">User ID</Label>
                        <Input type="text" name="userId" id="userId" value={this.state.userId} onChange={this.updateUserId} autoFocus />
                    </FormGroup>

                    <Button type="submit"  variant="contained" color="primary" className='{classes.submit}'>
                        Find Reimbursement
                    </Button>
                </Form>

                <Table>
                    <thead>
                        <tr>
                            <th>Reimbursement ID</th>
                            <th>Author</th>
                            <th>Amount</th>
                            <th>Date Submitted</th>
                            <th>Date Resolved</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Type</th>
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