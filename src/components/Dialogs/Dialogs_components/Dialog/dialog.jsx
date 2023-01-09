import s from "./dialog.module.css";

let Dialog = (props) => {
    return (
        <li className={s.dialog}>
            <div className={s.avatar}>
                <img
                    src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                    alt=""/>
            </div>
            <div className={s.textContent}>
                <div className={s.username}>
                    {props.username}
                </div>
                <div className={s.message}>
                    {props.message}
                </div>
            </div>
        </li>
    )
}

export default Dialog