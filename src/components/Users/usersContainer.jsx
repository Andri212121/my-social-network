import {connect} from "react-redux";
import {fetchingStatusChangeAC, followAC, selectPageAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {useEffect} from "react";
import Users from "./users";
import preLoader from '../../assets/img/Loader.svg'
import {following, getUsers, unFollowing} from "../../api/api";

let UsersAPIContainer = (props) => {

    useEffect(() => {
        props.fetchingStatusChange(true)
        getUsers(props.currentPage, props.pageSize).then(response => {
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
        getUsers(pageId, props.currentPage).then(response => {
            props.setUsers(response.data)
            props.fetchingStatusChange(false)
        })
    }
    let follow = (usersId) => {
        props.fetchingStatusChange(true)
        following(usersId).then(response => {
            props.fetchingStatusChange(false)
            if (response.status === 200) {
                props.follow(usersId)
            }
        })
    }
    let unfollow = (usersId) => {
        props.fetchingStatusChange(true)
        unFollowing(usersId).then(response => {
            props.fetchingStatusChange(false)
            if (response.status === 200) {
                props.unfollow(usersId)
            }
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
                top: "40%"
            }}/> : null}
            <Users
                users={props.users}
                pages={pages}
                changePage={changePage}
                follow={follow}
                unfollow={unfollow}
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