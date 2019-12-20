import { User } from "../models/user";
import {combineReducers} from "redux"
import { loginReducer } from "./login-reducer";
import { Reimbursement } from "../models/reimbursement";
import { reimbursementReducer } from "./reimbursement-reducer";



export interface ILoginState{
    user:User
}

export interface IState{
    login:ILoginState
    reimbursement: IReimbursementState
}

export interface IReimbursementState{
    reimbursement: Reimbursement,
    allReimbursement:[],
    userById: User,
    id: any,
    amount: any,
    dateSubmitted:any,
    dateResolved:any,
    description:any,
    resolver:any,
    status:any,
    type: any,
    successful: string,
}

export const state = combineReducers<IState>({
    login:loginReducer,
    reimbursement: reimbursementReducer
})