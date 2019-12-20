import { updateReimbursement, findReimbursementByStatus } from "../remote/frankenstein-client/frankenstein-reimbursement"


export const reimbursementUpdateTypes = {
    SUCCESSFUL_UPDATE: 'REIMBURSEMENT_UPDATE_SUCCESSFUL_UPDATE',
    UNSUCCESSFUL_UPDATE: 'REIMBURSEMENT_UPDATE_FAILED_UPDATE'
}

export const reimbursementFindTypes = {
    FOUND: 'REIMBURSEMENT_FOUND_SUCCESFUL',
    UNFOUND: 'REIMBURSEMENT_FOUND_UNSUCCESSFULLY'
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

export const reimbursementFindByStatus = (status:number) => async (dispatch:any) =>{
    try{
        let res = await findReimbursementByStatus(status)
        if(res.status === 200){
            dispatch({
                type: reimbursementFindTypes.FOUND,
                payload:{
                    user: res.body
                }
            })
        }
        else{
            dispatch({
                type: reimbursementFindTypes.UNFOUND
            })
        }
    }
    catch(e){
        dispatch({
            type: reimbursementFindTypes.UNFOUND
        })
    }
}