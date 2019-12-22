import { IState } from "../../reducers";
import { fUserById } from "../../action-mappers/user-by-id-action-mapper"
import { connect } from "react-redux";
import { UserByIdComponent } from "./UserByIdComponent";

const mapStateToProps = (state: IState) => {
    return {
        user: state.userById.user
    }
}

const mapDispatchtoProps = {
    fUserById
}

export default connect(mapStateToProps, mapDispatchtoProps)(UserByIdComponent)