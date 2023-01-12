import s from './chatFooter.module.css'
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faSmile} from "@fortawesome/free-regular-svg-icons";

let ChatFooter = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.onSendMessage(newMessageElement.current.value)
    }

    let updateNewMessageText = () => {
        props.onUpdateNewMessageText(newMessageElement.current.value)
    }

    return (
        <div className={s.chatFooter}>
            <div>
                <div className={s.searchBox}>
                    <div className={s.smiles}>
                        <FontAwesomeIcon icon={faSmile}/>
                    </div>
                    <div className={s.inputField}>
                        <textarea onChange={updateNewMessageText} ref={newMessageElement}
                                  value={props.newMessageText} placeholder="Message..."/>
                    </div>
                    <div className={s.sendButton}>
                        <button onClick={sendMessage}>
                            <FontAwesomeIcon icon={faPaperPlane}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatFooter