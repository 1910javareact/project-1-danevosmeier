import { reimbursementLogin } from "../remote/reimbursements-clients/reimbursements-user"





export const userLginTypes = {
    INVALID_CREDENTIALS: 'USER_LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'USER_LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'USER_LOGIN_FAILED_LOGIN'
}
export const userLogin = (username:string, password:string) => async (dispatch:any) => {

    try{
        let res = await reimbursementLogin(username, password)
        //a successful login
        if(res.status === 200){
            //this is how do it when we have async operations
            dispatch({
                type:userLginTypes.SUCCESSFUL_LOGIN,
                payload:{
                    user:res.body
                }
            })
        }else{
            dispatch({
                type:userLginTypes.INVALID_CREDENTIALS
            })
        }
    }catch(e){
        dispatch({
            type:userLginTypes.UNSUCCESSFUL_LOGIN
        })
    }
    
}