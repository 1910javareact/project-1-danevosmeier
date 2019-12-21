import { IUserById, state } from ".";
import { User } from "../models/user";
import { UserByIdTypes } from "../action-mappers/user-by-id-action-mapper";



const initialStarter: IUserById = {
    user: new User(0,'','','','','', [])
}

export const userByIdReducer = (state = initialStarter, action: any) =>{

    switch(action.type){
        case UserByIdTypes.SUCCESSFUL_USER_FOUND:{
            return{
                ...state,
                reimbursement: action.payload.user
            }
        }
        default:
            return state
    }
}