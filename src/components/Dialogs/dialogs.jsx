import s from './dialogs.module.css'
import Dialog from "./Dialogs_components/Dialog/dialog";
import UserMessage from "./Dialogs_components/Chat_message/message";
import OwnMessage from "./Dialogs_components/Chat_own_message/ownMessage";
import ChatHeader from "./Dialogs_components/Chat_header/chatHeader";
import ChatFooter from "./Dialogs_components/Chat_footer/chatFooter";


let Dialogs = (props) => {

    const windowInnerHeight = document.documentElement.clientHeight

    let dialog = props.dialogsPage.dialogs.map (dialog => <Dialog username={dialog.dialogName} message={dialog.lastMessage}/>)
    let message = props.dialogsPage.messages.map (message => message.owner === 1 ? <OwnMessage sender={message.sender} text={message.message}/> : <UserMessage sender={message.sender} text={message.message}/>)

    return (
        <div className={s.wrapper}>
            <ul className={s.dialogs} style={{height: windowInnerHeight - 60}}>
                {dialog}
            </ul>
            <div>
                <ChatHeader/>
                <ul className={s.chat} style={{height: windowInnerHeight - 210}}>
                    <div className={s.chatContainer}>
                        {message}
                        <div style={{height: '1px'}}></div>
                    </div>

                </ul>
                <ChatFooter/>
            </div>

        </div>
    )
}

export default Dialogs