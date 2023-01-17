const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let inicialState = {
    users:{
        items: [
            {
                id: 1,
                name: 'Andrew',
                surname: 'Luchin',
                photo:{
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                location: '',
                study: '',
                followers: 0,
            },
        ],
        totalCount: 0,
        error: null
    }
}

const usersReducer = (state = inicialState, action) => {

    let _setUsers = (data) => {
        let stateCopy = {...state}
        stateCopy.users.items = [...state.users.items]
        stateCopy.users = data
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


    switch (action.type) {
        case SET_USERS:
            return _setUsers(action.data)
        case FOLLOW:
            return _follow(action.userId)
        case UNFOLLOW:
            return _unfollow(action.userId)
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

export default usersReducer;