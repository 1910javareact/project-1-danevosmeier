import { getUserById } from "../remote/frankenstein-clients/f-user"

export const fUserByIdType = {
    USER_BY_ID_SUCCESSFUL: 'USER_BY_ID_SUCCESSFUL',
    FAILED_USER_BY_ID: 'FAILED_USER_BY_ID'
}

export const fUserById = (userId: number) => async (dispatch: any) => {
    try {
        let res = await getUserById(userId)
        if (res.status === 200) {
            dispatch({
                type: fUserByIdType.USER_BY_ID_SUCCESSFUL,
                payload: {
                    user: res.body
                }
            })
        } else {
            dispatch({
                type: fUserByIdType.FAILED_USER_BY_ID
            })
        }

    } catch (e) {
        dispatch({
            type: fUserByIdType.FAILED_USER_BY_ID
        })
    }
}