import React from 'react'
import { Reimbursement } from '../../models/reimbursement'
import { User } from '../../models/user'
import { ReimbursementRowComponent } from './reimbursement-row/ReimbursementRowComponent'
import { Table } from 'reactstrap'

interface IReimbursementInfoComponentProps {
    reimbursement: Reimbursement[]
    user: User
    fReimbursementInfo: (userId: number) => void
}

export class ReimbursementInfoComponent extends React.Component<IReimbursementInfoComponentProps, any>{
    componentDidMount() {
        this.props.fReimbursementInfo(this.props.user.userId)
    }

    render() {
        let rows = this.props.reimbursement.map((e) => {
            return <ReimbursementRowComponent reimbursement={e} key={'reimbursement' + e.reimbursementId} />
        })
        return (
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
        )
    }
}