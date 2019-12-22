import { IState } from "../../reducers";
import { fReimbursementByStatusId } from "../../action-mappers/reimbursement-by-status-id"
import { connect } from "react-redux";
import { ReimbursementByStatusIdComponent } from "./ReimbursementByStatusIdComponent";

const mapStateToProps = (state: IState) => {
    return {
        reimbursement: state.reimbursementByStatusId.reimbursement
    }
}

const mapDispatchtoProps = {
    fReimbursementByStatusId
}

export default connect(mapStateToProps, mapDispatchtoProps)(ReimbursementByStatusIdComponent)