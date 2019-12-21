import { IState } from "../../reducers";
import {userById} from '../../action-mappers/user-by-id-action-mapper'
import { connect } from "react-redux";
import { UserByIdDisplayComponent } from "./UserByIdComponent";


const mapStateToProps = (state:IState) => {
    return{
        user: state.userId.user
    }
}

const mapDispatchToProps = {
    userById
}

export default connect(mapStateToProps, mapDispatchToProps)(UserByIdDisplayComponent)