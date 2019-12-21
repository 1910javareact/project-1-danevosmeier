import { ILoginState } from "."
import { User } from "../models/user"
import {  userLginTypes } from "../action-mappers/login-action-mappers"




const initialState: ILoginState = {
    user: new User(0, '', '', '', '', '', [])
}


//whatever this reducer returns, becomes the total state of the store
//do not forget to spread state
export const loginReducer = (state = initialState, action:any) => {
    
    switch (action.type) {
        case userLginTypes.SUCCESSFUL_LOGIN:{
            //we return the new total state
            //dont forget to spread
            return {
                ...state,
                user:action.payload.user
            }
        }
        default:
            return state
    }

}