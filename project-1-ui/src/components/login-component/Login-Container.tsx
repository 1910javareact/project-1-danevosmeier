import { IState } from "../../reducers";
import {fLogin} from '../../action-mappers/login-action-mapper'
import { connect } from "react-redux";
import {FLoginComponent} from './LoginComponent'



const mapStateToProps = (state:IState) =>{
    return{
        user: state.login.user
    }
}

const mapDispatchToProps = {
    fLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(FLoginComponent)