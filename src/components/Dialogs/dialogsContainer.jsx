import UserMessage from "./Dialogs_components/Chat_message/message";
import OwnMessage from "./Dialogs_components/Chat_own_message/ownMessage";
import Dialogs from "./dialogs";
import Dialog from "./Dialogs_components/Dialog/dialog";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs.map(dialog => <Dialog username={dialog.dialogName}
                                                                 message={dialog.lastMessage}/>),
        messages: state.dialogsPage.messages.map(message => message.owner === 1 ?
            <OwnMessage sender={message.sender} text={message.message}/> :
            <UserMessage sender={message.sender} text={message.message}/>),
        windowInnerHeight: document.documentElement.clientHeight
    }
}
const mapDispatchToProps = () => {
    return {}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer