import { IUserState } from ".";
import { User } from "../models/user";
import { Role } from "../models/role";
import { fUserByIdType } from "../action-mappers/user-by-id-action-mapper";

const initialState: IUserState = {
    user: new User(0, '', '', '', '', '', new Role(0, ''))
}

export const userByIdReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case fUserByIdType.USER_BY_ID_SUCCESSFUL: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        default:
            return state
    }
}