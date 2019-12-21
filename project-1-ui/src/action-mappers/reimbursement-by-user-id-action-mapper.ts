import { getReimbursementByUserId } from "../remote/reimbursements-clients/reimbursements-by-user-id"

export const ReimbByUserIdTypes = {
    INVALID_CREDENTIALS: 'TOKEN_HAS_EXPIRED',
    SUCCESSFUL_REIMBURSEMENT: 'REIMBURSEMENT_FOUND',
    UNSUCCESSFUL_FAILED: 'REIMBURSEMENT_NOT_FOUND'
}

export const reimbursementByUserId = (id: number) => async (dispatch:any) =>{
    try{
        let res = await getReimbursementByUserId(id)

        if(res.status === 200){
            dispatch({
                type: ReimbByUserIdTypes.SUCCESSFUL_REIMBURSEMENT,
                payload:{
                    reimbursements: res.body
                }
            })
        }
        else{
            dispatch({
                type: ReimbByUserIdTypes.INVALID_CREDENTIALS
            })
        }
    }
    catch(e){
        dispatch({
            type: ReimbByUserIdTypes.UNSUCCESSFUL_FAILED
        })
    }
}