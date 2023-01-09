import s from './message.module.css'

let UserMessage = (props) => {
    return (
        <li className={s.messageBox}>
            <div className={s.avatar}>
                <img
                    src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                    alt=""/>
            </div>
            <div className={s.message}>
                <div className={s.userName}>
                    {props.sender}
                </div>
                {props.text}
            </div>
        </li>
    )
}

export default UserMessage