import { updateUser } from "../remote/frankenstein-client/frankenstein-user"


export const fUpdateTypes = {
    SUCCESSFUL_UPDATE: 'F_UPDATE_SUCCESSFUL_UPDATE',
    UNSUCCESSFUL_LOGIN: 'F_UPDATE_FAILED_UPDATE'
}

export const fUpdate = (userId:number, username:string, firstName:string, lastName:string, email:string) => async (dispatch:any) =>{
    try{
        let res = await updateUser(userId, username, firstName, lastName, email)
        if(res.status === 201){
            dispatch({
                type: fUpdateTypes.SUCCESSFUL_UPDATE,
                payload:{
                    user: res.body
                }
            })
        }
        else{
            dispatch({
                type: fUpdateTypes.UNSUCCESSFUL_LOGIN
            })
        }
    }
    catch(e){
        dispatch({
            type: fUpdateTypes.UNSUCCESSFUL_LOGIN
        })
    }
}