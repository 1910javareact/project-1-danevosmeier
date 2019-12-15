import React from 'react'
import { Table } from 'reactstrap'
import { Reimbursement } from '../../models/reimbursement'

interface IReimbursementDisplayProps{
    allReimbursements: Reimbursement[]
}

export class ReimbursementDisplayComponent extends React.Component<any, IReimbursementDisplayProps>{
    constructor(props: any){
        super(props)
        this.state = {
            allReimbursements:[]
        }
    }

    async componentDidMount(){
        try{
            let r = await getAllReimbursments()
        }
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}