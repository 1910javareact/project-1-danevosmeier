import { reimbursementUserClient } from "./reimbursements-clients-users/reimbursement-user-client"


export const getReimbursementByUserId = async (id:number) =>{
    try{
        let response = await reimbursementUserClient.get('/reimbursements/' + id)

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
        throw new Error('Something went wrong')
    }
}