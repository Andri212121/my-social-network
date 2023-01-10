import profileReducer from "./profile-reducer";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

let store = {
    _state: {
        profilePage: {
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
        },

        dialogsPage: {

            dialogs: [
                {id: 1, dialogName: "Andrew Luchin", lastMessage: "eerferiuhiuygerfiugferrurrrur"}
            ],

            messages: [
                {id: 1, sender: "foivjoivj", message: "3irufvheiufvher", owner: 1},
                {id: 2, sender: "hoiuhgo", message: "poipijohoiuhiu", owner: 0},
                {id: 3, sender: "ouigoiugjl", message: "ytfutdgvhgvcbn", owner: 0},
                {id: 4, sender: "foiviuhijoivj", message: "nmbmnbvjhvyguyg", owner: 0},
                {id: 5, sender: "uih", message: "ytrdughjbvnmgfytf", owner: 0},
                {id: 6, sender: ",nm,mn", message: "3irufvheiufvher", owner: 1},
                {id: 7, sender: "jgcvgc", message: "dtrduyrsugfjbvcyutf", owner: 1},
                {id: 8, sender: "hjbjvg", message: "3irufvheiufvher", owner: 0},
                {id: 9, sender: ",mn,mn", message: "bvcyfrdytrdsresxgyhfdx", owner: 0},
                {id: 10, sender: "iygjhbu", message: "ryeduytrdfghdcytrdutyr", owner: 1},
                {id: 11, sender: "uyfiygoujhj", message: "yrtdyurteutyfduyitrty", owner: 1},
                {id: 12, sender: "uyguyfi", message: "uyrsytrstryewweraqwatrszrztres", owner: 0},
                {id: 13, sender: "tcytfiyt", message: "treztrestrewewydsgfdxretsres", owner: 1}
            ]
        }
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubsriber = observer;
    },

    _callSubsriber() {
        console.log("State updated!")
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._callSubsriber(this._state)
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

window.store = store;
export default store;