import s from './ownMessage.module.css'

let OwnMessage = (props) => {
    return (
        <li className={s.messageBox}>
            <div className={s.message}>
                <div className={s.userName}>
                    {props.sender}
                </div>
                {props.text}
            </div>
            <div className={s.avatar}>
                <img
                    src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                    alt=""/>
            </div>
        </li>
    )
}

export default OwnMessage