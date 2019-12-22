import { IState } from "../../reducers";
import { fLogin } from "../../action-mappers/login-action-mappers"
import { connect } from "react-redux";
import { LoginComponent } from "./LoginComponent";

const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user
    }
}

const mapDispatchToProps = {
    fLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)