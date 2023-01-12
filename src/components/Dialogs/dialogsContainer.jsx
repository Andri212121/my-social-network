import UserMessage from "./Dialogs_components/Chat_message/message";
import OwnMessage from "./Dialogs_components/Chat_own_message/ownMessage";
import Dialogs from "./dialogs";
import Dialog from "./Dialogs_components/Dialog/dialog";

let DialogsContainer = (props) => {

    let state = props.store.getState();

    const windowInnerHeight = document.documentElement.clientHeight

    let dialogs = state.dialogsPage.dialogs.map (dialog => <Dialog username={dialog.dialogName} message={dialog.lastMessage}/>)
    let messages = state.dialogsPage.messages.map (message => message.owner === 1 ? <OwnMessage sender={message.sender} text={message.message}/> : <UserMessage sender={message.sender} text={message.message}/>)

    return (<Dialogs dialogs={dialogs} messages={messages} windowInnerHeight={windowInnerHeight} store={props.store}/>)
}

export default DialogsContainer