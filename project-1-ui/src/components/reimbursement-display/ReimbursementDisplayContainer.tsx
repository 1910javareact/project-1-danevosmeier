import { IState } from "../../reducers";
import {reimbursementUpdate, reimbursementFindByStatus} from '../../action-mappers/reimbursement-action-mapper'
import { connect } from "react-redux";
import { ReimbursementDisplay } from "./ReimbursementDisplayComponent";



const mapStateToProps = (state: IState, ownProps:any) => {
    return{
        user: state.login.user,
        history: ownProps.history,
        match: ownProps.match,
        location: ownProps.location,
        allReimbursment: state.reimbursement.allReimbursement,
        userById: state.reimbursement.userById,
        id: state.reimbursement.id,
        amount: state.reimbursement.amount,
        dateSubmitted: state.reimbursement.dateSubmitted,
        dateResolved: state.reimbursement.dateResolved,
        description: state.reimbursement.description,
        resolver: state.reimbursement.resolver,
        status: state.reimbursement.status,
        type: state.reimbursement.type,
        successful: state.reimbursement.successful,
        menu: state.reimbursement.menu
    }
}

const mapDispatchToProps = {
    reimbursementUpdate,
    reimbursementFindByStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(ReimbursementDisplay)