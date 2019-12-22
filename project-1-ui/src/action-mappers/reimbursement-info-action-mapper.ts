import { fRemoteReimbursement } from "../remote/frankenstein-clients/f-reimbursement"

export const fReimbursementType = {
    REIMBURSEMENT_FOUND_SUCCESSFUL: 'REIMBURSEMENT_FOUND_SUCCESSFUL',
    FAILED_REIMBURSEMENT_INFO: 'FAILED_REIMBURSEMENT_INFO'
}

export const fReimbursementInfo = (userId: number) => async (dispatch: any) => {
    try {
        let res = await fRemoteReimbursement(userId)
        // Request successful
        if (res.status === 200) {
            dispatch({
                type: fReimbursementType.REIMBURSEMENT_FOUND_SUCCESSFUL,
                payload: {
                    reimbursement: res.body
                }
            })
        } else {
            dispatch({
                type: fReimbursementType.FAILED_REIMBURSEMENT_INFO
            })
        }

    } catch (e) {
        dispatch({
            type: fReimbursementType.FAILED_REIMBURSEMENT_INFO
        })
    }
}