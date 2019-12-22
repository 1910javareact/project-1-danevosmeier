import { combineReducers } from "redux";
import { User } from "../models/user";
import { loginReducer } from "./login-reducer";
import { userReducer } from "./user-reducer";
import { Reimbursement } from "../models/reimbursement";
import { reimbursementReducer } from "./reimbursement-reducer";
import { userByIdReducer } from "./user-by-id-reducer";
import { reimbursementByStatusIdReducer } from "./reimbursement-by-status-id-reducer";

export interface ILoginState {
    user: User
}

export interface IUserState {
    user: User
}

export interface IReimbursementState {
    reimbursement: Reimbursement[]
}

export interface IState {
    login: ILoginState,
    user: IUserState,
    userById: IUserState,
    reimbursementByStatusId: IReimbursementState,
    reimbursementInfo: IReimbursementState
}

export const state = combineReducers<IState>({
    login: loginReducer,
    user: userReducer,
    userById: userByIdReducer,
    reimbursementByStatusId: reimbursementByStatusIdReducer,
    reimbursementInfo: reimbursementReducer
})