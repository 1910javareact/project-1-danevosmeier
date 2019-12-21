import { Reimbursement } from "../../../models/reimbursement"
import React from "react"

interface IReimbursementsByStatusDisplayRowProps{
    reimbursement: Reimbursement
}

export const ReimbursementByStatusDisplayRowComponent: React.FC<IReimbursementsByStatusDisplayRowProps> = (props) => {
    return (
        <tr>
            <td>{props.reimbursement.reimbursementId}</td>
            <td>{props.reimbursement.author}</td>
            <td>{props.reimbursement.amount}</td>
            <td>{props.reimbursement.dateSubmitted}</td>
            <td>{props.reimbursement.description}</td>
            <td>{props.reimbursement.status}</td>
        </tr>
    )
}
