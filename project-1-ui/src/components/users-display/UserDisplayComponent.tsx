import React, { SyntheticEvent } from "react"
import { Redirect } from "react-router";
import { User } from "../../models/user";
import { getAllUsers, getUserById } from '../../remote/frankenstein-client/frankenstein-user'
import { UsersDiplayRowComponent } from "./user-display-row/UsersDisplayRowComponents";
import { Table } from "reactstrap";
import { Role } from "../../models/role";

interface IUsersDisplayProps{
    user: User
    fUpdate: (id:any, username:any, firstName:any, lastName:any, email:any) =>void
}

interface IUsersDisplayState {
    allUsers: User[]
    userById:User
    id:any
    username:any
    firstName:any
    lastName:any
    email:any
    success:string
}

export class UsersDisplayComponent extends React.Component<IUsersDisplayProps, IUsersDisplayState>{
    constructor(props: any) {
        super(props)
        this.state = {
            allUsers: [],
            userById: new User(0,'','','','','',new Role(0,'')),
            id:'',
            username:'',
            firstName:'',
            lastName:'',
            email:'',
            success:''
        }
    }

    async componentDidMount() {
        try {
            let u = await getUserById(this.props.user.userId)
            if(u.status === 200){
                this.setState({
                    ...this.state,
                    userById:u.body[0]
                })
            }
        }
        catch (e) {
            console.log(e);

        }
    }

    getAllUsersMethod = async() =>{
        try{
            let u = await getAllUsers()
            if (u.status === 200){
                this.setState({
                    ...this.state,
                    allUsers: u.body
                })
            }
        }
        catch(e){
            console.log(e);
            
        }
    }

    updateUserId = (e:any) =>{
        this.setState({
            ...this.state,
            id: e.target.value
        })
    }

    updateUserName = (e:any) =>{
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }

    updateUserFirstName = (e:any) =>{
        this.setState({
            ...this.state,
            firstName: e.target.value
        })
    }

    updateUserLastName = (e:any) => {
        this.setState({
            ...this.state,
            lastName: e.target.value
        })
    }

    updateUser = async(e:SyntheticEvent) =>{
        e.preventDefault()
        this.props.fUpdate(this.state.id, this.state.username, this.state.firstName, this.state.lastName, this.state.email)
    }

    render() {
        let rows = this.state.allUsers.map((e) => {
            return <UsersDiplayRowComponent user={e} key={'user ' + e.userId} />
        })
        return (
            this.props.user.userId ?
                <div>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Roles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </div>
                :
                <Redirect to='/login'/>
        )
    }
}