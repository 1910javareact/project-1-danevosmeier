import { IState } from "../../reducers";

import {reimbursementByUserId} from '../../action-mappers/reimbursement-by-user-id-action-mapper'
import { connect } from "react-redux";
import {ReimbursementByUserIdComponent} from './ReimbursementByUserIdComponent'



const mapStateToProps = (state:IState) =>{
    return{
        reimbursement:state.reim.reimbursement
    }
}

const mapDispatchToProps = {
    reimbursementByUserId
}

export default connect(mapStateToProps, mapDispatchToProps)(ReimbursementByUserIdComponent)