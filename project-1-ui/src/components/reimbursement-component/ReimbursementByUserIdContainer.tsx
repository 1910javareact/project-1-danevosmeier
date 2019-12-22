import { IState } from "../../reducers";
import { fReimbursementInfo } from "../../action-mappers/reimbursement-info-action-mapper"
import { connect } from "react-redux";
import { ReimbursementByUserIdComponent } from "./ReimbursementByUserIdComponent";

const mapStateToProps = (state: IState) => {
    return {
        reimbursement: state.reimbursementInfo.reimbursement
    }
}

const mapDispatchtoProps = {
    fReimbursementInfo
}

export default connect(mapStateToProps, mapDispatchtoProps)(ReimbursementByUserIdComponent)