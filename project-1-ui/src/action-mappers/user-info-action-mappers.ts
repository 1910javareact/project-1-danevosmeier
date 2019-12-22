import { User } from "../models/user"

export const fUserTypes = {
    USER_SUCCESSFUL: 'USER_FOUND_SUCCESSFUL'
}

export const userAction = (user: User) => {
    return {
        type: fUserTypes.USER_SUCCESSFUL,
        payload: {
            user
        }
    }
}