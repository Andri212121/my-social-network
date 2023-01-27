
const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_PROFILE = "SET_PROFILE"

let inicialState = {
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        name: '',
        surname: '',
        id: 0,
        location: '',
        followers: '',
        education: '',
        dayOfBirth: 0,
        monthOfBirth: 0,
        yearOfBirth: 0,
        photos: {
            small: null,
            large: null
        }
    },
    posts: [
        {id: 1, postText: "po[kpok[poj[oj", author: "ijoijpohy"},
        {id: 2, postText: "po[iuyg[ihuiyg[oj", author: "hiouhoiugoiu"}
    ],

    newPostText: ""
}

const profileReducer = (state = inicialState, action) => {
    let _addPost = () => {
        let newPost = {
            id: 5,
            postText: state.newPostText,
            author: "erf"
        }
        let stateCopy = {...state}
        stateCopy.posts = [...state.posts]
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = ''
        return stateCopy
    }

    let _updateNewPostText = (newText) => {
        let stateCopy = {...state}
        stateCopy.newPostText = newText;
        return stateCopy
    }

    let _setProfile = (profile) => {
        let stateCopy = JSON.parse(JSON.stringify(state));
        stateCopy.profile = profile
        return stateCopy
    }

    switch (action.type) {
        case ADD_POST:
            return _addPost();

        case UPDATE_NEW_POST_TEXT:
            return _updateNewPostText(action.newText);

        case SET_PROFILE:
            return _setProfile(action.newProfile);
        default:
            return state;
    }
}

export const addPostAC = () => {
    return {type: ADD_POST}
}
export const updateNewTextAC = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export const setProfileAC = (profile) => {
    return {type: SET_PROFILE, newProfile: profile}
}

export default profileReducer;