import { frankensteinLogin } from "../remote/frankenstein-client/frankenstein-user"


export const fLoginTypes = {
    INVALID_CREDENTIALS: 'F_LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'F_LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'F_LOGIN_FAILED_LOGIN'
}

export const fLogin = (username:string, password:string) => async (dispatch:any) => {

    try{
        let res = await frankensteinLogin(username, password)

        if(res.status === 200){
            dispatch({
                type: fLoginTypes.SUCCESSFUL_LOGIN,
                payload:{
                    user: res.body
                }
            })
        }
        else{
            dispatch({
                type: fLoginTypes.INVALID_CREDENTIALS
            })
        }
    }
    catch(e){
        dispatch({
            type: fLoginTypes.UNSUCCESSFUL_LOGIN
        })
    }
}