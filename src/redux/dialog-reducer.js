const SEND_MESSAGE = "SEND_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

let inicialState = {
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
    ],
    newMessageText: ''
}

const dialogReducer = (state = inicialState, action) => {

    let _sendMessage = () => {
        let newMessage = {
            id: 14,
            sender: "tcytfiyt",
            message: state.newMessageText,
            owner: 1
        }
        let stateCopy = {...state}
        stateCopy.messages = [...state.messages]
        stateCopy.messages.push(newMessage)
        stateCopy.newMessageText = ''
        return stateCopy
    }

    let _updateNewPostText = (newText) => {
        let stateCopy = {...state}
        stateCopy.newMessageText = newText;
        return stateCopy
    }
    switch (action.type) {
        case SEND_MESSAGE:
            return _sendMessage();

        case UPDATE_NEW_MESSAGE_TEXT:
            return _updateNewPostText(action.newText)

        default:
            return state
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogReducer;