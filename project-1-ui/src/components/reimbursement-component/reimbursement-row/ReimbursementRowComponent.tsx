import React from 'react'
import { Reimbursement } from '../../../models/reimbursement';

interface IReimbursementRowProps {
    reimbursement: Reimbursement
}

export const ReimbursementRowComponent: React.FC<IReimbursementRowProps> = (props) => {
    return (
        <tr>
            <td>{props.reimbursement.reimbursementId}</td>
            <td>{props.reimbursement.author}</td>
            <td>{props.reimbursement.amount}</td>
            <td>{props.reimbursement.dateSubmitted}</td>
            <td>{props.reimbursement.dateResolved}</td>
            <td>{props.reimbursement.description}</td>
            <td>{props.reimbursement.status}</td>
            <td>{props.reimbursement.type}</td>
        </tr>
    )
}