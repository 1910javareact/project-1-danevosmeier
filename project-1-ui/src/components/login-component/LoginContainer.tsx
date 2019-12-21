
import { connect } from "react-redux"
import { LoginComponent } from "./Login"
import {userLogin} from "../../action-mappers/login-action-mappers"
import { IState } from "../../reducers"




const mapStateToProps = (state: IState) => {
    //this function returns, what we want from state as an pbject
    return {
        user: state.login.user}
    }
    const mapDispatchToProps = {
        userLogin
    }
    
    //export the new container component that wraps up our original component
    //if we dont use the container component, we don't get any redux
    export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)