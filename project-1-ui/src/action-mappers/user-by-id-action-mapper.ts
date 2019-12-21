import { getUserById } from "../remote/reimbursements-clients/user-by-id"


export const UserByIdTypes = {
    INVALID_CREDENTIALS: 'TOKEN_HAS_EXPIRED',
    SUCCESSFUL_USER_FOUND: 'USER_FOUND',
    UNSUCCESSFUL_FAILED: 'USER_NOT_FOUND'
}

export const userById = (id: number) => async (dispatch: any) => {
    try {
        let res = await getUserById(id)

        if (res.status === 200) {
            dispatch({
                type: UserByIdTypes.SUCCESSFUL_USER_FOUND,
                payload: {
                    user: res.body
                }
            })
        }
        else {
            dispatch({
                type: UserByIdTypes.INVALID_CREDENTIALS
            })
        }
    }
    catch (e) {
        dispatch({
            type: UserByIdTypes.UNSUCCESSFUL_FAILED
        })
    }
}
