import { IState } from "../../reducers";
import {reimbursementUpdate} from '../../action-mappers/reimbursement-action-mapper'
import { connect } from "react-redux";
import { ReimbursementDisplay } from "./ReimbursementComponent";



const mapStateToProps = (state: IState, ownProps:any) => {
    return{
        user: state.login.user,
        history: ownProps.history,
        match: ownProps.match,
        location: ownProps.location
    }
}

const mapDispatchToProps = {
    reimbursementUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(ReimbursementDisplay)