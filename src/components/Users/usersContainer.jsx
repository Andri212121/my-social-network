import {connect} from "react-redux";
import {followAC, selectPageAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {useEffect} from "react";
import axios from "axios";
import Users from "./Users_components/users";

let UsersAPIContainer = (props) => {

    useEffect(() => {
        axios.get(`http://localhost:3001/users?page=${props.currentPage}&take=${props.pageSize}`).then(response => {
            props.setUsers(response.data)
        })
    }, [props])
    let pageCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let changePage = (pageId) => {
        props.selectPage(pageId)
        axios.get(`http://localhost:3001/users?page=${pageId}&take=${props.pageSize}`).then(response => {
            props.setUsers(response.data)
        })
    }
    return (<Users users={props.users} pages={pages} changePage={changePage} follow={props.follow} unfollow={props.unfollow} currentPage={props.currentPage}/>)
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users.items,
        totalCount: state.usersPage.users.totalCount,
        currentPage: state.usersPage.users.currentPage,
        pageSize: state.usersPage.users.pageSize,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {dispatch(setUsersAC(users))},
        follow: (id) => {dispatch(followAC(id))},
        unfollow: (id) => {dispatch(unfollowAC(id))},
        selectPage: (pageId) => {dispatch(selectPageAC(pageId))}
    }
}

const UsersContainers = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainers