import { connect } from "react-redux"
import { ReimbursementsByStatusDisplayComponent } from "./ReimbursementByStatusDisplayComponent"
import { IState } from "../../reducers"
import {reimbursementByUserId} from '../../action-mappers/reimbursement-by-user-id-action-mapper'
const mapStateToProps = (state:IState, ownProps:any) => {
    return {
        user:state.login.user,
        history:ownProps.history,
        match:ownProps.match,
        location:ownProps.location
    }
}
    const mapDispatchtoProps = {
        reimbursementByUserId
    }


export default connect(mapStateToProps,mapDispatchtoProps)(ReimbursementsByStatusDisplayComponent)