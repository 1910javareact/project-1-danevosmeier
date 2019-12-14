import { IState } from "../../reducers";
import { connect } from "react-redux";
import { UsersDisplayComponent } from "./UserDisplayComponent";




const mapStateToProps = (state:IState, ownProps:any) => {
    return{
        user: state.login.user,
        histor: ownProps.history,
        match: ownProps.match,
        location: ownProps.location
    }
}

export default connect(mapStateToProps)(UsersDisplayComponent)