import { IReimbursement } from "."
import { Reimbursement } from "../models/reimbursement"
import { ReimbByUserIdTypes } from "../action-mappers/reimbursement-by-user-id-action-mapper"


const initialStater: IReimbursement = {
    reimbursement: [new Reimbursement(0,0,0,0,0,'',0,0,0)]
}

export const reimbursementUserIdReducer = (state = initialStater, action:any) =>{
    switch(action.type){
        case ReimbByUserIdTypes.SUCCESSFUL_REIMBURSEMENT:{
            return{
                ...state,
                reimbursement: action.payload.reimbursement,
            }
        }
        default:
            return state
    }
}