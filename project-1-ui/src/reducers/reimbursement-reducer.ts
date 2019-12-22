import { IReimbursementState } from ".";
import { Reimbursement } from "../models/reimbursement";
import { fReimbursementType } from "../action-mappers/reimbursement-info-action-mapper";

const initialState: IReimbursementState = {
    reimbursement: [new Reimbursement(0, 0, 0, 0, 0, '', 0, 0, 0)]
}

export const reimbursementReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case fReimbursementType.REIMBURSEMENT_FOUND_SUCCESSFUL: {
            return {
                ...state,
                reimbursement: action.payload.reimbursement
            }
        }
        default:
            return state
    }
}