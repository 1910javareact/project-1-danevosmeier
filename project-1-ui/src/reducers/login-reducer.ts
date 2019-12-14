import { ILoginState } from ".";
import { User } from "../models/user";
import { fLoginTypes } from "../action-mappers/login-action-mapper";


const initialState:ILoginState = {
    user: new User(0,'','','','','',[])
}

export const loginReducer = (state = initialState, action:any) => {

    switch(action.type){
        case fLoginTypes.SUCCESSFUL_LOGIN:{
            return{
                ...state,
                user: action.payload.user
            }
        }
        default:
            return state
    }
}