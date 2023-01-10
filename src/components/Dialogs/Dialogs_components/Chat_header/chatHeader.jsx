import s from './chatHeader.module.css'
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

let ChatHeader = (props) => {
    return (
        <div className={s.chatHeader}>
            <div className={s.logo}>
                <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt=""/>
            </div>
            <div className={s.nameAndStatus}>
                <div className={s.username}>
                    hiuhiiugi
                </div>
                <div className={s.status}>
                    last seen recently
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ChatHeader