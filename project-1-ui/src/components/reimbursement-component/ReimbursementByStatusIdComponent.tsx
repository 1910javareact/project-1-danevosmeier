import React, { SyntheticEvent } from 'react'
import { Reimbursement } from '../../models/reimbursement'
import { ReimbursementRowComponent } from './reimbursement-row/ReimbursementRowComponent'
import { Form, Label, Input, FormGroup, Button, Table } from 'reactstrap'
import './../component.css'

interface IReimbursementByStatusIdComponentProps {
    reimbursement: Reimbursement[]
    fReimbursementByStatusId: (statusId: number) => void
}

export class ReimbursementByStatusIdComponent extends React.Component<IReimbursementByStatusIdComponentProps, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            statusId: undefined
        }
    }
    updateStatusId = (e: any) => {
        this.setState({
            ...this.state,
            statusId: e.target.value
        })
    }
    submitStatusId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.fReimbursementByStatusId(this.state.statusId)
    }

    render() {
        let rows = this.props.reimbursement.map((e) => {
            return <ReimbursementRowComponent reimbursement={e} key={'reimbursement' + e.reimbursementId} />
        })
        return (
            <div>
                
                <Form onSubmit={this.submitStatusId} className='{classes.form}' noValidate>

                    <FormGroup>
                        <Label for="statusId"><h4>Status ID</h4></Label>
                        <Input type="text" name="statusId" id="statusId" value={this.state.statusId} onChange={this.updateStatusId} autoFocus />
                    </FormGroup>

                    <br/>

                    <Button type="submit"  variant="contained" color="primary">
                        Find Reimbursement
                    </Button>
                </Form>

                <br/>
                <Table>
                    <thead>
                        <tr>
                            <th>Reimbursement ID</th>
                            <th>Author</th>
                            <th>Amount</th>
                            <th>Date Submitted</th>
                            <th>Date Resolved</th>
                            <th>Description</th>
                            <th>Resolver</th>
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