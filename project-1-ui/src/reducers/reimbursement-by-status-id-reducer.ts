import { IReimbursementState } from ".";
import { Reimbursement } from "../models/reimbursement";
import { fReimbursementByStatusIdType } from "../action-mappers/reimbursement-by-status-id";

const initialState: IReimbursementState = {
    reimbursement: [new Reimbursement(0, 0, 0, 0, 0, '', 0, 0, 0)]
}

export const reimbursementByStatusIdReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case fReimbursementByStatusIdType.REIMBURSEMENT_BY_STATUS_ID_SUCCESSFUL: {
            return {
                ...state,
                reimbursement: action.payload.reimbursement
            }
        }
        default:
            return state
    }
}