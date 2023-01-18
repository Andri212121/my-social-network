const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

let inicialState = {
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
    switch (action.type) {
        case ADD_POST:
            return _addPost();

        case UPDATE_NEW_POST_TEXT:
            return _updateNewPostText(action.newText);

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export default profileReducer;