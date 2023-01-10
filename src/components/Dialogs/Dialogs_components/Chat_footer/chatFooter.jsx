import s from './chatFooter.module.css'
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faSmile} from "@fortawesome/free-regular-svg-icons";
import {sendMessageActionCreator} from "../../../../redux/dialog-reducer";
import {updateNewMessageTextActionCreator} from "../../../../redux/dialog-reducer";

let ChatFooter = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        if(newMessageElement.current.value !== ''){
            props.dispatch(sendMessageActionCreator());
        }
    }

    let updateNewMessageText = () => {
        props.dispatch(updateNewMessageTextActionCreator(newMessageElement.current.value));
    }

    return (
        <div className={s.chatFooter}>
            <div>
                <div className={s.searchBox}>
                    <div className={s.smiles}>
                        <FontAwesomeIcon icon={faSmile}/>
                    </div>
                    <div className={s.inputField}>
                        <textarea onChange={updateNewMessageText} ref={newMessageElement} value={props.dialogPage.newMessageText} placeholder="Message..."/>
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