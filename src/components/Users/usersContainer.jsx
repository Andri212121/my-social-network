import {connect} from "react-redux";
import {fetchingStatusChangeAC, followAC, selectPageAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {useEffect} from "react";
import axios from "axios";
import Users from "./users";
import preLoader from '../../assets/img/Loader.svg'

let UsersAPIContainer = (props) => {

    useEffect(() => {
        props.fetchingStatusChange(true)
        axios.get(`http://localhost:3001/users?page=${props.currentPage}&take=${props.pageSize}`).then(response => {
            props.fetchingStatusChange(false)
            props.setUsers(response.data)
        })
    }, [])
    let pageCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let changePage = (pageId) => {
        props.selectPage(pageId)
        props.fetchingStatusChange(true)
        axios.get(`http://localhost:3001/users?page=${pageId}&take=${props.pageSize}`).then(response => {
            props.setUsers(response.data)
            props.fetchingStatusChange(false)
        })
    }
    return (
        <>
            {props.isFetching ? <img src={preLoader} alt='preloader' style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: 'auto',
                left: "0",
                right: "0",
                textAlign: "center",
                top: "40%"}}/> : null}
            <Users
                users={props.users}
                pages={pages}
                changePage={changePage}
                follow={props.follow}
                unfollow={props.unfollow}
                currentPage={props.currentPage}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.usersPage.users.isFetching,
        users: state.usersPage.users.items,
        totalCount: state.usersPage.users.totalCount,
        currentPage: state.usersPage.users.currentPage,
        pageSize: state.usersPage.users.pageSize,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        follow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },
        selectPage: (pageId) => {
            dispatch(selectPageAC(pageId))
        },
        fetchingStatusChange: (status) => {
            dispatch(fetchingStatusChangeAC(status))
        }
    }
}

const UsersContainers = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainers