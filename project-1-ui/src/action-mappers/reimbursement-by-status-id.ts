import { fRemoteReimbursementByStatusId } from "../remote/frankenstein-clients/f-reimbursement"

export const fReimbursementByStatusIdType = {
    REIMBURSEMENT_BY_STATUS_ID_SUCCESSFUL: 'REIMBURSEMENT_BY_STATUS_ID_SUCCESSFUL',
    FAILED_REIMBURSEMENT_BY_STATUS_ID: 'FAILED_REIMBURSEMENT_BY_STATUS_ID'
}

export const fReimbursementByStatusId = (statusId: number) => async (dispatch: any) => {
    try {
        let res = await fRemoteReimbursementByStatusId(statusId)
        if (res.status === 200) {
            dispatch({
                type: fReimbursementByStatusIdType.REIMBURSEMENT_BY_STATUS_ID_SUCCESSFUL,
                payload: {
                    reimbursement: res.body
                }
            })
        } else {
            dispatch({
                type: fReimbursementByStatusIdType.FAILED_REIMBURSEMENT_BY_STATUS_ID
            })
        }

    } catch (e) {
        dispatch({
            type: fReimbursementByStatusIdType.FAILED_REIMBURSEMENT_BY_STATUS_ID
        })
    }
}