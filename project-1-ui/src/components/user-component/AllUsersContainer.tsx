import { connect } from "react-redux"
import { IState } from "../../reducers"
import { AllUsersComponent } from "./AllUsersComponent"

const mapStateToProps = (state: IState, ownProps: any) => {
    return {
        user: state.login.user,
        history: ownProps.history,
        match: ownProps.match,
        loaction: ownProps.location
    }
}

export default connect(mapStateToProps)(AllUsersComponent)