const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SELECTPAGE = 'SELECTPAGE'

let inicialState = {
    users:{
        items: [
            {},
        ],
        totalCount: 0,
        currentPage: 1,
        pageSize: 8,
        error: null
    }
}

const usersReducer = (state = inicialState, action) => {

    let _setUsers = (data) => {
        let stateCopy = JSON.parse(JSON.stringify(state));
        stateCopy.users.items = data.items
        stateCopy.users.totalCount = data.totalCount
        return stateCopy
    }

    let _follow = (id) => {
        let stateCopy = {...state}
        stateCopy.users.items = [...state.users.items]
        stateCopy.users.items.map(u => {
            if (u.id === id) {
                u.followed = true
            }
            return u
        })
        return stateCopy
    }

    let _unfollow = (id) => {
        let stateCopy = {...state}
        stateCopy.users.items = [...state.users.items]
        stateCopy.users.items.map(u => {
            if (u.id === id) {
                u.followed = false
            }
            return u
        })
        return stateCopy
    }

    let _selectPage = (pageId) => {
        let stateCopy = JSON.parse(JSON.stringify(state));
        stateCopy.users.currentPage = pageId
        return stateCopy
    }


    switch (action.type) {
        case SET_USERS:
            return _setUsers(action.data)
        case FOLLOW:
            return _follow(action.userId)
        case UNFOLLOW:
            return _unfollow(action.userId)
        case SELECTPAGE:
            return _selectPage(action.pageId)
        default:
            return state;
    }
}

export const setUsersAC = (info) => {
    return {
        type: SET_USERS,
        data: info
    }
}
export const followAC = (id) => {
    return {
        type: FOLLOW,
        userId: id
    }
}
export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW,
        userId: id
    }
}
export const selectPageAC = (id) => {
    return {
        type: SELECTPAGE,
        pageId: id
    }
}

export default usersReducer;