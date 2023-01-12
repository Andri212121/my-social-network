import React from "react";
import {sendMessageActionCreator} from "../../../../redux/dialog-reducer";
import {updateNewMessageTextActionCreator} from "../../../../redux/dialog-reducer";
import ChatFooter from "./chatFooter";

let ChatFooterContainer = (props) => {

    let state = props.store.getState()

    let onSendMessage = (text) => {
        if (text !== '') {
            props.store.dispatch(sendMessageActionCreator());
        }
    }

    let onUpdateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (<ChatFooter onSendMessage={onSendMessage} onUpdateNewMessageText={onUpdateNewMessageText} newMessageText={state.dialogsPage.newMessageText}/>)
}

export default ChatFooterContainer