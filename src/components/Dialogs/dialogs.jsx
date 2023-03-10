import s from './dialogs.module.css'
import ChatHeader from "./Dialogs_components/Chat_header/chatHeader";
import ChatFooterContainer from "./Dialogs_components/Chat_footer/chatFooterContainer";


let Dialogs = (props) => {

    return (
        <div className={s.wrapper}>
            <div>
                <ChatHeader/>
                <ul className={s.chat} style={{height: props.windowInnerHeight - 210}}>
                    <div className={s.chatContainer}>
                        {props.messages}
                        <div style={{height: '1px'}}></div>
                    </div>
                </ul>
                <ChatFooterContainer/>
            </div>
            <ul className={s.dialogs} style={{height: props.windowInnerHeight - 60}}>
                {props.dialogs}
            </ul>
        </div>
    )
}

export default Dialogs