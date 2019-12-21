import { RouteComponentProps } from "react-router";
import { Reimbursement } from "../../models/reimbursement";
import { SyntheticEvent } from "react";
import { ReimbursementByUserIdDisplayRowComponent } from "./reimbursement-by-user-id-display-row/ReimbursementByUserIdDisplayRowComponent";
import React from 'react'
import { Table } from "reactstrap";


interface IReimbursementDisplayProps extends RouteComponentProps{
    reimbursement: Reimbursement[]
    reimbursementUserId: (id:number) => void
}

export class ReimbursementByStatusDisplayComponent extends React.Component<IReimbursementDisplayProps,any>{
    
    constructor(props:any){
        super(props)
        this.state = {
            id: undefined
        }
    }

    updateId = (e:any) => {
        this.setState({
            ...this.state,
            id: e.target.value
        })
    }

    submitId = async (e:SyntheticEvent) => {
        e.preventDefault()
        this.props.reimbursementUserId(this.state.id)
    }

    render(){
        let rows = this.props.reimbursement.map((e) => {
            return <ReimbursementByUserIdDisplayRowComponent reimbursement={e} key={'reimbursement' + e.author} />
        })
        return(
            <div>
                <Table bordered>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Author</td>
                            <td>Amount</td>
                            <td>Date Submitted</td>
                            <td>Description</td>
                            <td>Status</td>
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