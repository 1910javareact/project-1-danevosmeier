import { IReimbursementState, state } from ".";
import { Reimbursement } from "../models/reimbursement";
import { User } from "../models/user";
import { Role } from "../models/role";
import { reimbursementFindTypes } from "../action-mappers/reimbursement-action-mapper";


const initialState:IReimbursementState = {
    reimbursement: new Reimbursement(0,0,0,0,0,'',0,0,0),
    allReimbursement: [],
    userById: new User(0,'','','','','', new Role(0,'')),
    id:null,
    amount:null,
    dateSubmitted:null,
    dateResolved:null,
    description:null,
    resolver:null,
    status:null,
    type:null,
    successful:'',
}

export const reimbursementReducer = (state = initialState, action:any) => {
    switch(action.type){
        case reimbursementFindTypes.FOUND:{
            return{
                ...state,
                allReimbursement: action.payload.user
            }
        }
        default:
            return state
    }
}