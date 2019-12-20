import { fClient } from "./frankenstein-client"



export async function updateReimbursement(reimbursementId:number, author:number, amount:number, dateSubmitted:number, dateResolved:number, description:string, resolver:number, status:number, type:number){
    const update = {
        reimbursementId,
        author,
        amount,
        dateSubmitted,
        dateResolved,
        description,
        resolver,
        status,
        type
    }

    try{
        const response = await fClient.patch('/reimbursement', update)
        if(response.status === 201){
            return{
                status: response.status,
                body: response.data
            }
        }
        else{
            return{
                status: response.status,
                body: undefined
            }
        }
    }
    catch(e){
        console.log(e);
        throw new Error('Unable to update reimbursement')
    }
}

export async function findReimbursementByStatus(id:number){
    try{
        const response = await fClient.get('/reimbursement/status/' + id)

        if(response.status === 200){
            return{
                status: response.status,
                body: response.data
            }
        }
        else{
            return{
                status: response.status,
                body: undefined
            }
        }
    }
    catch(e){
        console.log(e);
        throw new Error('Unable to find reimbursement by that status id')
    }
}