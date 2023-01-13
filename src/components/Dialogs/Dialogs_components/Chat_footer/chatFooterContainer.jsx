import {sendMessageActionCreator} from "../../../../redux/dialog-reducer";
import {updateNewMessageTextActionCreator} from "../../../../redux/dialog-reducer";
import ChatFooter from "./chatFooter";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: (text) => {if (text !== '') {dispatch(sendMessageActionCreator());}},
        onUpdateNewMessageText: (text) => {dispatch(updateNewMessageTextActionCreator(text));}
    }
}
const ChatFooterContainer = connect(mapStateToProps, mapDispatchToProps)(ChatFooter)

export default ChatFooterContainer