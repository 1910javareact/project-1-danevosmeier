import { getReimbursementByStatus } from "../remote/reimbursements-clients/reimbursements-by-status"

export const ReimbTypes = {
    INVALID_CREDENTIALS: 'TOKEN_HAS_EXPIRED',
    SUCCESSFUL_REIMBURSEMENT: 'REIMBURSEMENT_FOUND',
    UNSUCCESSFUL_FAILED: 'REIMBURSEMENT_NOT_FOUND'
}
export const reimbursementID = (id:number) => async (dispatch:any) => {

    try{
        let res = await getReimbursementByStatus(id)
        //a successful login
        if(res.status === 200){
            //this is how do it when we have async operations
            dispatch({
                type:ReimbTypes.SUCCESSFUL_REIMBURSEMENT,
                payload:{
                    reimbursements: res.body
                }
            })
        }else{
            dispatch({
                type:ReimbTypes.INVALID_CREDENTIALS
            })
        }
    }catch(e){
        dispatch({
            type:ReimbTypes.UNSUCCESSFUL_FAILED
        })
    }
    
}