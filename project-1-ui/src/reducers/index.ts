import { User } from "../models/user";
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { Reimbursement } from "../models/reimbursement";
import { reimbursementReducer } from "./reimbursement-reducer";
import { userByIdReducer } from "./user-by-id-reducer";

export interface IState{
    login:ILoginState,
    reim: IReimbursement,
    userId: IUserById,

}


export interface IUserById{
    user:User
}

export interface ILoginState {
    user:User
}

export interface IReimbursement{
    reimbursement:Reimbursement[]
}

export interface IReimbursementId{
    reimbursementId: Reimbursement
}


export const state = combineReducers<IState>({
    login:loginReducer,
    reim: reimbursementReducer,
    userId: userByIdReducer,
})
