import { fRemoteLogin } from "../remote/frankenstein-clients/f-user"

export const fLoginType = {
    INVALID_CREDENTIALS: 'LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'LOGIN_FAILED_LOGIN'
}

export const fLogin = (username: string, password: string) => async (dispatch: any) => {
    try {
        let res = await fRemoteLogin(username, password)
        // Succesful login
        if (res.status === 200) {
            dispatch({
                type: fLoginType.SUCCESSFUL_LOGIN,
                payload: {
                    user: res.body
                }
            })
        } else {
            dispatch({
                type: fLoginType.INVALID_CREDENTIALS
            })
        }
    } catch (e) {
        dispatch({
            type: fLoginType.UNSUCCESSFUL_LOGIN
        })
    }
}