import { IReimbursement } from "."
import { Reimbursement } from "../models/reimbursement"
import { ReimbTypes } from "../action-mappers/reimbursement-action-mapper"

const initialStater: IReimbursement = {
   reimbursement: [new Reimbursement(0, 0, 0, 0, 0, '', 0, 0, 0)]
}


//whatever this reducer returns, becomes the total state of the store
//do not forget to spread state
export const reimbursementReducer = (state = initialStater, action:any) => {
    
    switch (action.type) {
        case ReimbTypes.SUCCESSFUL_REIMBURSEMENT:{
            //we return the new total state
            //dont forget to spread
            return {
                ...state,
                reimbursement:action.payload.reimbursement,
               // reimbursement:state.reimbursement
            }
        }
        default:
            return state
    }

}