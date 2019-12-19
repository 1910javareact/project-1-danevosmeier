import { updateReimbursement } from "../remote/frankenstein-client/frankenstein-reimbursement"


export const reimbursementUpdateTypes = {
    SUCCESSFUL_UPDATE: 'REIMBURSEMENT_UPDATE_SUCCESSFUL_UPDATE',
    UNSUCCESSFUL_UPDATE: 'REIMBURSEMENT_UPDATE_FAILED_UPDATE'
}

export const reimbursementUpdate = (id:number, author:number, amount:number, dateSubmitted:number, dateResolved:number, description:string, resolver:number, status:number, type:number) => async(dispatch:any) =>{
    try{
        let res = await updateReimbursement(id, author, amount, dateSubmitted, dateResolved, description, resolver, status, type)
        if(res.status === 201){
            dispatch({
                type: reimbursementUpdateTypes.SUCCESSFUL_UPDATE,
                payload:{
                    user: res.body
                }
            })
        }
        else{
            dispatch({
                type: reimbursementUpdateTypes.UNSUCCESSFUL_UPDATE
            })
        }
    }
    catch(e){
        dispatch({
            type: reimbursementUpdateTypes.UNSUCCESSFUL_UPDATE
        })
    }
}