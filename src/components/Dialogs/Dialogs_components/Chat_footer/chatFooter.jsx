import s from './chatFooter.module.css'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faSmile} from "@fortawesome/free-regular-svg-icons";

let ChatFooter = (props) => {
    return (
        <div className={s.chatFooter}>
            <div>
                <div className={s.searchBox}>
                    <div className={s.smiles}>
                        <FontAwesomeIcon icon={faSmile}/>
                    </div>
                    <div className={s.inputField}>
                        <input type="text" placeholder="Message..."/>
                    </div>
                    <div className={s.sendButton}>
                        <button>
                            <FontAwesomeIcon icon={faPaperPlane}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatFooter