import { reimbursementUserClient } from "./reimbursements-clients-users/reimbursement-user-client";

export async function reimbursementLogin(username:string, password:string){
 
    const credentials = {
        username,
        password
    }
    try{
        const response = await reimbursementUserClient.post('/login', credentials)
        if(response.status===200){
            return{
                status:response.status,
                body: response.data
            }
        }else{
            return{
                status:response.status,
                body:undefined
            }
        }
    }catch(e){
        console.log(e);
        throw new Error('Unable to login')
    }
    
}

export const getAllUsers = async () => {
    try{
        let response = await reimbursementUserClient.get('/users')
        if(response.status === 200){
            return{
                status:response.status,
                body:response.data
            }
        }else{
            return {
                status:response.status,
                body:undefined
            }
        }
    }catch(e){
        console.log(e);
        throw new Error('Unable to get all users')
    }
}