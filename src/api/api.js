import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/'
    }
)

export let getUsers = (currentPage, pageSize = 5) => {
   return instance.get(`users?page=${currentPage}&take=${pageSize}`)
}

export let following = (usersId) => {
    return instance.post(`/follow/${usersId}`,{})
}

export let unFollowing = (usersId) => {
    return instance.delete(`/follow/${usersId}`)
}

export let getProfile = (id) => {
    return instance.get(`/profile/${id}`)
}

export let authMe = () => {
    return instance.get(`auth/me`)
}