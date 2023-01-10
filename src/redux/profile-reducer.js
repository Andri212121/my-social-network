
const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

let inicialState = {
        posts: [
            {id: 1, postText: "po[kpok[poj[oj", author: "ijoijpohy"},
            {id: 2, postText: "po[iuyg[ihuiyg[oj", author: "hiouhoiugoiu"},
            {id: 3, postText: "po[kpokiuy[poj[oj", author: "uoigoiuhpo"},
            {id: 5, postText: "po[gu[ioh[oj", author: "goiugyio"},
            {id: 6, postText: "po[kpok[poj[oj", author: "ouhoiug"},
            {id: 7, postText: "ses[tyfty[poj[oj", author: "oiugoiuhop[i"},
            {id: 8, postText: "drd[kpok[poj[oj", author: "pijpoijpoij"}
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
        state.posts.push(newPost);
        state.newPostText = ''
    }

    let _updateNewPostText = (newText) => {
        state.newPostText = newText;
    }
    switch (action.type) {
        case ADD_POST:
            _addPost();
            break;
        case UPDATE_NEW_POST_TEXT:
            _updateNewPostText(action.newText);
            break;
        default:
            break;
    }
    return state;
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