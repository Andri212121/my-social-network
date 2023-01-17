import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import Users from "./users";



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users.items,
        totalCount: state.usersPage.users.totalCount
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {dispatch(setUsersAC(users))},
        follow: (id) => {dispatch(followAC(id))},
        unfollow: (id) => {dispatch(unfollowAC(id))}
    }
}

const UsersContainers = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainers